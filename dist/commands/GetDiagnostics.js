"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDiagnostics = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _GetDiagnostics = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetDiagnostics"));

var _GetDiagnosticsResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetDiagnosticsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetDiagnostics extends _BaseCommand.default {
  constructor(values) {
    super(_GetDiagnostics.default, _GetDiagnosticsResponse.default, values);
  }

}

exports.GetDiagnostics = GetDiagnostics;