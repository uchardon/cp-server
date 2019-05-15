"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLocalListVersion = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _GetLocalListVersion = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetLocalListVersion"));

var _GetLocalListVersionResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetLocalListVersionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetLocalListVersion extends _BaseCommand.default {
  constructor(values) {
    super(_GetLocalListVersion.default, _GetLocalListVersionResponse.default, values);
  }

}

exports.GetLocalListVersion = GetLocalListVersion;