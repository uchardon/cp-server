"use strict";

var _centralSystem = _interopRequireDefault(require("./centralSystem"));

var _commands = _interopRequireDefault(require("./commands"));

var AuthorizeConst = _interopRequireWildcard(require("../dist/commands/Authorize"));

var StartTransactionConst = _interopRequireWildcard(require("../dist/commands/StartTransaction"));

var _ocppError = _interopRequireWildcard(require("../dist/ocppError"));

var BootNotificationConst = _interopRequireWildcard(require("../dist/commands/BootNotification"));

var StatusNotificationConst = _interopRequireWildcard(require("../dist/commands/StatusNotification"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const centralSystem = createServer();

function createServer(server) {
  const cSystem = new _centralSystem.default({
    validateConnection,
    wsOptions: {
      server
    }
  });
  cSystem.listen(null);

  cSystem.onStatusUpdate = async function () {};

  cSystem.onRequest = async function (client, command) {
    const connection = client.connection;
    console.info(`New command from ${connection.url}`);

    switch (true) {
      case command instanceof _commands.default.BootNotification:
        client.info = {
          connectors: [],
          ...command
        };
        return {
          status: BootNotificationConst.STATUS_ACCEPTED,
          currentTime: new Date().toISOString(),
          interval: 5
        };

      case command instanceof _commands.default.Authorize:
        return {
          idTagInfo: {
            status: AuthorizeConst.STATUS_ACCEPTED
          }
        };

      case command instanceof _commands.default.StartTransaction:
        return {
          transactionId: 1,
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED
          }
        };

      case command instanceof _commands.default.StopTransaction:
        return {
          transactionId: 1,
          idTagInfo: {
            status: StartTransactionConst.STATUS_ACCEPTED
          }
        };

      case command instanceof _commands.default.Heartbeat:
        return {
          currentTime: new Date().toISOString()
        };

      case command instanceof _commands.default.StatusNotification:
        // client.info = client.info || {};
        // client.info.connectors = client.info.connectors || [];
        const connectorIndex = client.info.connectors.findIndex(item => command.connectorId === item.connectorId);

        if (connectorIndex === -1) {
          client.info.connectors.push({ ...command
          });
        } else {
          client.info.connectors[connectorIndex] = { ...command
          };
        }

        await cSystem.onStatusUpdate();
        return {};

      default:
        throw new _ocppError.default(_ocppError.ERROR_NOTIMPLEMENTED, 'Unknown command');
    }
  };

  cSystem.toggleChargePoint = async (client, connectorId) => {
    const connector = client.info.connectors.find(item => connectorId.toString() === item.connectorId.toString());

    if (!connector) {
      return null;
    }

    if (connector.status !== StatusNotificationConst.STATUS_AVAILABLE) {
      let command = new _commands.default.RemoteStopTransaction({
        transactionId: connectorId
      });
      await client.connection.send(command);
      return;
    }

    let command = new _commands.default.RemoteStartTransaction({
      connectorId: connectorId,
      idTag: '' + connectorId
    });
    await client.connection.send(command);
  };

  return cSystem;

  function validateConnection(url) {
    return true;
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}