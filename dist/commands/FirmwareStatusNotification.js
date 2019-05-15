"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirmwareStatusNotification = exports.STATUS_INSTALLED = exports.STATUS_INSTALLING = exports.STATUS_INSTALLATIONFAILED = exports.STATUS_IDLE = exports.STATUS_DOWNLOADING = exports.STATUS_DOWNLOADFAILED = exports.STATUS_DOWNLOADED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _FirmwareStatusNotification = _interopRequireDefault(require("../../ocpp-1.6-schemas/FirmwareStatusNotification"));

var _FirmwareStatusNotificationResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/FirmwareStatusNotificationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_DOWNLOADED = 'Downloaded';
exports.STATUS_DOWNLOADED = STATUS_DOWNLOADED;
const STATUS_DOWNLOADFAILED = 'DownloadFailed';
exports.STATUS_DOWNLOADFAILED = STATUS_DOWNLOADFAILED;
const STATUS_DOWNLOADING = 'Downloading';
exports.STATUS_DOWNLOADING = STATUS_DOWNLOADING;
const STATUS_IDLE = 'Idle';
exports.STATUS_IDLE = STATUS_IDLE;
const STATUS_INSTALLATIONFAILED = 'InstallationFailed';
exports.STATUS_INSTALLATIONFAILED = STATUS_INSTALLATIONFAILED;
const STATUS_INSTALLING = 'Installing';
exports.STATUS_INSTALLING = STATUS_INSTALLING;
const STATUS_INSTALLED = 'Installed';
exports.STATUS_INSTALLED = STATUS_INSTALLED;

class FirmwareStatusNotification extends _BaseCommand.default {
  constructor(values) {
    super(_FirmwareStatusNotification.default, _FirmwareStatusNotificationResponse.default, values);
  }

}

exports.FirmwareStatusNotification = FirmwareStatusNotification;