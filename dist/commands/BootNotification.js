"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootNotification = exports.STATUS_REJECTED = exports.STATUS_PENDING = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _BootNotification = _interopRequireDefault(require("../../ocpp-1.6-schemas/BootNotification"));

var _BootNotificationResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/BootNotificationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_PENDING = 'Pending';
exports.STATUS_PENDING = STATUS_PENDING;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;

class BootNotification extends _BaseCommand.default {
  constructor(values) {
    super(_BootNotification.default, _BootNotificationResponse.default, values);
  }

}

exports.BootNotification = BootNotification;