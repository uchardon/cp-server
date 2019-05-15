"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiagnosticsStatusNotification = exports.STATUS_UPLOADING = exports.STATUS_UPLOADFAILED = exports.STATUS_UPLOADED = exports.STATUS_IDLE = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _DiagnosticsStatusNotification = _interopRequireDefault(require("../../ocpp-1.6-schemas/DiagnosticsStatusNotification"));

var _DiagnosticsStatusNotificationResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/DiagnosticsStatusNotificationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_IDLE = 'Idle';
exports.STATUS_IDLE = STATUS_IDLE;
const STATUS_UPLOADED = 'Uploaded';
exports.STATUS_UPLOADED = STATUS_UPLOADED;
const STATUS_UPLOADFAILED = 'UploadFailed';
exports.STATUS_UPLOADFAILED = STATUS_UPLOADFAILED;
const STATUS_UPLOADING = 'Uploading';
exports.STATUS_UPLOADING = STATUS_UPLOADING;

class DiagnosticsStatusNotification extends _BaseCommand.default {
  constructor(values) {
    super(_DiagnosticsStatusNotification.default, _DiagnosticsStatusNotificationResponse.default, values);
  }

}

exports.DiagnosticsStatusNotification = DiagnosticsStatusNotification;