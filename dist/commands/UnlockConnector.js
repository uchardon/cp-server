"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnlockConnector = exports.STATUS_NOTSUPPORTED = exports.STATUS_UNLOCKFAILED = exports.STATUS_UNLOCKED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _UnlockConnector = _interopRequireDefault(require("../../ocpp-1.6-schemas/UnlockConnector"));

var _UnlockConnectorResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/UnlockConnectorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_UNLOCKED = 'Unlocked';
exports.STATUS_UNLOCKED = STATUS_UNLOCKED;
const STATUS_UNLOCKFAILED = 'UnlockFailed';
exports.STATUS_UNLOCKFAILED = STATUS_UNLOCKFAILED;
const STATUS_NOTSUPPORTED = 'NotSupported';
exports.STATUS_NOTSUPPORTED = STATUS_NOTSUPPORTED;

class UnlockConnector extends _BaseCommand.default {
  constructor(values) {
    super(_UnlockConnector.default, _UnlockConnectorResponse.default, values);
  }

}

exports.UnlockConnector = UnlockConnector;