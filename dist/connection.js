"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connection = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var _ws = _interopRequireDefault(require("ws"));

var _commands = _interopRequireDefault(require("./commands"));

var _constants = require("./constants");

var _helpers = require("./helpers");

var _ocppError = _interopRequireWildcard(require("./ocppError"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Connection {
  constructor(socket, req = null) {
    this.socket = socket;
    this.req = req;
    this.requests = {};

    if (req) {
      this.url = req && req.url;
      const ip = req && (req.connection && req.connection.remoteAddress || req.headers['x-forwarded-for']);
      console.log(`New connection from "${ip}", protocol "${socket.protocol}", url "${this.url}"`);
    } else {
      this.url = 'SERVER';
    }

    socket.on('message', msg => this.onMessage(msg));
    socket.on('error', err => {
      console.info(err);
    });
  }

  async onMessage(message) {
    let messageType, messageId, commandNameOrPayload, commandPayload, errorDetails;

    try {
      [messageType, messageId, commandNameOrPayload, commandPayload, errorDetails] = JSON.parse(message);
    } catch (err) {
      throw new Error(`Failed to parse message: "${message}", ${err.message}`);
    }

    switch (messageType) {
      case _constants.CALL_MESSAGE:
        // request
        console.log(`>> ${this.url}: ${message}`);
        const CommandModel = _commands.default[commandNameOrPayload];

        if (!CommandModel) {
          throw new Error(`Unknown command ${commandNameOrPayload}`);
        }

        let commandRequest, responseData, responseObj;

        try {
          commandRequest = new CommandModel(commandPayload);
        } catch (err) {
          // send error if payload didn't pass the validation
          return await this.sendError(messageId, new _ocppError.default(_ocppError.ERROR_FORMATIONVIOLATION, err.message));
        }

        try {
          responseData = await this.onRequest(commandRequest);
          responseObj = commandRequest.createResponse(responseData);
        } catch (err) {
          return await this.sendError(messageId, err);
        }

        try {
          await this.sendMessage(messageId, responseObj, _constants.CALLRESULT_MESSAGE);
        } catch (err) {
          await this.sendError(messageId, err);
        }

        break;

      case _constants.CALLRESULT_MESSAGE:
        // response
        console.log(`>> ${this.url}: ${message}`);
        const [responseCallback] = this.requests[messageId];

        if (!responseCallback) {
          throw new Error(`Response for unknown message ${messageId}`);
        }

        delete this.requests[messageId];
        responseCallback(commandNameOrPayload);
        break;

      case _constants.CALLERROR_MESSAGE:
        // error response
        console.log(`>> ${this.url}: ${message}`);

        if (!this.requests[messageId]) {
          throw new Error(`Response for unknown message ${messageId}`);
        }

        const [, rejectCallback] = this.requests[messageId];
        delete this.requests[messageId];
        rejectCallback(new _ocppError.default(commandNameOrPayload, commandPayload, errorDetails));
        break;

      default:
        throw new Error(`Wrong message type ${messageType}`);
    }
  }

  send(command, messageType = _constants.CALL_MESSAGE) {
    return this.sendMessage((0, _v.default)(), command, messageType);
  }

  sendError(messageId, err) {
    console.log(`Error: ${err.message}`);
    const error = err instanceof _ocppError.default ? err : new _ocppError.default(_ocppError.ERROR_INTERNALERROR, err.message);
    return this.sendMessage(messageId, error, _constants.CALLERROR_MESSAGE);
  }

  sendMessage(messageId, command, messageType = _constants.CALLRESULT_MESSAGE) {
    const socket = this.socket;
    const self = this;
    const commandValues = (0, _helpers.getObjectValues)(command);
    return new Promise((resolve, reject) => {
      let messageToSend;

      switch (messageType) {
        case _constants.CALL_MESSAGE:
          this.requests[messageId] = [onResponse, onRejectResponse];
          const commandName = command.getCommandName();
          messageToSend = JSON.stringify([messageType, messageId, commandName, commandValues]);
          break;

        case _constants.CALLRESULT_MESSAGE:
          messageToSend = JSON.stringify([messageType, messageId, commandValues]);
          break;

        case _constants.CALLERROR_MESSAGE:
          const {
            code,
            message,
            details
          } = command;
          messageToSend = JSON.stringify([messageType, messageId, code, message, details]);
          break;
      }

      console.log(`messageToSend << ${messageToSend}`);

      if (socket.readyState === _ws.default.OPEN) {
        socket.send(messageToSend);
      } else {
        return onRejectResponse(`Socket closed ${messageId}`);
      }

      if (messageType !== _constants.CALL_MESSAGE) {
        resolve();
      } else {
        setTimeout(() => onRejectResponse(`Timeout for message ${messageId}`), _constants.SOCKET_TIMEOUT);
      }

      function onResponse(payload) {
        const response = command.createResponse(payload);
        return resolve(response);
      }

      function onRejectResponse(reason) {
        self.requests[messageId] = () => {};

        const error = reason instanceof _ocppError.default ? reason : new Error(reason);
        reject(error);
      }
    });
  }

  onRequest(request) {}

}

exports.Connection = Connection;