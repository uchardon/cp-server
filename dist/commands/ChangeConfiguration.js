"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeConfiguration = exports.STATUS_NOTSUPPORTED = exports.STATUS_REBOOTREQUIRED = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _ChangeConfiguration = _interopRequireDefault(require("../../ocpp-1.6-schemas/ChangeConfiguration"));

var _ChangeConfigurationResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/ChangeConfigurationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;
const STATUS_REBOOTREQUIRED = 'RebootRequired';
exports.STATUS_REBOOTREQUIRED = STATUS_REBOOTREQUIRED;
const STATUS_NOTSUPPORTED = 'NotSupported';
exports.STATUS_NOTSUPPORTED = STATUS_NOTSUPPORTED;

class ChangeConfiguration extends _BaseCommand.default {
  constructor(values) {
    super(_ChangeConfiguration.default, _ChangeConfigurationResponse.default, values);
  }

}

exports.ChangeConfiguration = ChangeConfiguration;