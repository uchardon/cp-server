"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateFirmware = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _UpdateFirmware = _interopRequireDefault(require("../../ocpp-1.6-schemas/UpdateFirmware"));

var _UpdateFirmwareResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/UpdateFirmwareResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateFirmware extends _BaseCommand.default {
  constructor(values) {
    super(_UpdateFirmware.default, _UpdateFirmwareResponse.default, values);
  }

}

exports.UpdateFirmware = UpdateFirmware;