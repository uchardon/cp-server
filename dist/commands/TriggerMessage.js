"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TriggerMessage = exports.STATUS_NOTIMPLEMENTED = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.REQUESTED_MESSAGE_STATUSNOTIFICATION = exports.REQUESTED_MESSAGE_METERVALUES = exports.REQUESTED_MESSAGE_HEARTBEAT = exports.REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION = exports.REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION = exports.REQUESTED_MESSAGE_BOOTNOTIFICATION = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _TriggerMessage = _interopRequireDefault(require("../../ocpp-1.6-schemas/TriggerMessage"));

var _TriggerMessageResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/TriggerMessageResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const REQUESTED_MESSAGE_BOOTNOTIFICATION = 'BootNotification';
exports.REQUESTED_MESSAGE_BOOTNOTIFICATION = REQUESTED_MESSAGE_BOOTNOTIFICATION;
const REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION = 'DiagnosticsStatusNotification';
exports.REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION = REQUESTED_MESSAGE_DIAGNOSTICSSTATUSNOTIFICATION;
const REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION = 'FirmwareStatusNotification';
exports.REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION = REQUESTED_MESSAGE_FIRMWARESTATUSNOTIFICATION;
const REQUESTED_MESSAGE_HEARTBEAT = 'Heartbeat';
exports.REQUESTED_MESSAGE_HEARTBEAT = REQUESTED_MESSAGE_HEARTBEAT;
const REQUESTED_MESSAGE_METERVALUES = 'MeterValues';
exports.REQUESTED_MESSAGE_METERVALUES = REQUESTED_MESSAGE_METERVALUES;
const REQUESTED_MESSAGE_STATUSNOTIFICATION = 'StatusNotification';
exports.REQUESTED_MESSAGE_STATUSNOTIFICATION = REQUESTED_MESSAGE_STATUSNOTIFICATION;
const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;
const STATUS_NOTIMPLEMENTED = 'NotImplemented';
exports.STATUS_NOTIMPLEMENTED = STATUS_NOTIMPLEMENTED;

class TriggerMessage extends _BaseCommand.default {
  constructor(values) {
    super(_TriggerMessage.default, _TriggerMessageResponse.default, values);
  }

}

exports.TriggerMessage = TriggerMessage;