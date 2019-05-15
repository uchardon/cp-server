"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reset = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.TYPE_SOFT = exports.TYPE_HARD = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _Reset = _interopRequireDefault(require("../../ocpp-1.6-schemas/Reset"));

var _ResetResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/ResetResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TYPE_HARD = 'Hard';
exports.TYPE_HARD = TYPE_HARD;
const TYPE_SOFT = 'Soft';
exports.TYPE_SOFT = TYPE_SOFT;
const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;

class Reset extends _BaseCommand.default {
  constructor(values) {
    super(_Reset.default, _ResetResponse.default, values);
  }

}

exports.Reset = Reset;