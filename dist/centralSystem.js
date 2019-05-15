"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ws = _interopRequireDefault(require("ws"));

var _connection = require("./connection");

var _constants = require("./constants");

var _centralSystemClient = _interopRequireDefault(require("./centralSystemClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CentralSystem {
  constructor(options) {
    this.options = options || {};
    this.clients = [];
  }

  listen(port = 9220, host = null) {
    this.port = port; //const validateConnection = this.options.validateConnection || (() => true);

    const wsOptions = {
      port,
      host,
      handleProtocols: (protocols, req) => {
        if (protocols.indexOf(_constants.OCPP_PROTOCOL_1_6) === -1) {
          return '';
        }

        return _constants.OCPP_PROTOCOL_1_6;
      },
      verifyClient: async (info, cb) => {
        if (info.req.url === LOGGER_URL) {
          return cb(true);
        }

        const isAccept = await validateConnection(info.req.url);
        console.log(`Request for connect "${info.req.url}" (${info.req.headers['sec-websocket-protocol']}) - ${isAccept ? 'Valid identifier' : 'Invalid identifier'}`);
        cb(isAccept, 404, 'Central System does not recognize the charge point identifier in the URL path');
      },
      ...(this.options.wsOptions || {})
    }; //this.server = new WebSocket.Server(wsOptions);

    this.server = new _ws.default.Server({
      port: 9220
    });
    this.server.on('error', (ws, req) => {
      console.info('ERROR: ', ws, req);
    });
    this.server.on('upgrade', (ws, req) => {
      console.info('upgrade: ', req);
    });
    this.server.on('connection', (ws, req) => this.onNewConnection(ws, req));
    console.info('connection: Listen on HOST', host);
    console.info('connection: Listen on PORT', port);
  }

  onNewConnection(socket, req) {
    socket.on('error', err => {
      console.info(err, socket.readyState);
    });

    if (!socket.protocol) {
      // From Spec: If the Central System does not agree to using one of the subprotocols offered by the client,
      // it MUST complete the WebSocket handshake with a response without a Sec-WebSocket-Protocol header and then
      // immediately close the WebSocket connection.
      console.log('Close connection due to unsupported protocol');
      return socket.close();
    }

    const connection = new _connection.Connection(socket, req, this.logger);
    const client = new _centralSystemClient.default(connection);

    connection.onRequest = command => this.onRequest(client, command);

    socket.on('close', err => {
      const index = this.clients.indexOf(client);
      this.clients.splice(index, 1);
    });
    this.clients.push(client);
  }

  async onRequest(client, command) {
    console.log('>> ON REQUEST <<');
  }

}

exports.default = CentralSystem;