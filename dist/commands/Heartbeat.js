"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heartbeat = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _Heartbeat = _interopRequireDefault(require("../../ocpp-1.6-schemas/Heartbeat"));

var _HeartbeatResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/HeartbeatResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Heartbeat extends _BaseCommand.default {
  constructor(values) {
    super(_Heartbeat.default, _HeartbeatResponse.default, values);
  }

}

exports.Heartbeat = Heartbeat;