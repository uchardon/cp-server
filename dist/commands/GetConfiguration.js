"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetConfiguration = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _GetConfiguration = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetConfiguration"));

var _GetConfigurationResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetConfigurationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetConfiguration extends _BaseCommand.default {
  constructor(values) {
    super(_GetConfiguration.default, _GetConfigurationResponse.default, values);
  }

}

exports.GetConfiguration = GetConfiguration;