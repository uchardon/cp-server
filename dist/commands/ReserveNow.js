"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReserveNow = exports.STATUS_UNAVAILABLE = exports.STATUS_REJECTED = exports.STATUS_OCCUPIED = exports.STATUS_FAULTED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _ReserveNow = _interopRequireDefault(require("../../ocpp-1.6-schemas/ReserveNow"));

var _ReserveNowResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/ReserveNowResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_FAULTED = 'Faulted';
exports.STATUS_FAULTED = STATUS_FAULTED;
const STATUS_OCCUPIED = 'Occupied';
exports.STATUS_OCCUPIED = STATUS_OCCUPIED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;
const STATUS_UNAVAILABLE = 'Unavailable';
exports.STATUS_UNAVAILABLE = STATUS_UNAVAILABLE;

class ReserveNow extends _BaseCommand.default {
  constructor(values) {
    super(_ReserveNow.default, _ReserveNowResponse.default, values);
  }

}

exports.ReserveNow = ReserveNow;