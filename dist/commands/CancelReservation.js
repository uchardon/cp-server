"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancelReservation = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _CancelReservation = _interopRequireDefault(require("../../ocpp-1.6-schemas/CancelReservation"));

var _CancelReservationResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/CancelReservationResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;

class CancelReservation extends _BaseCommand.default {
  constructor(values) {
    super(_CancelReservation.default, _CancelReservationResponse.default, values);
  }

}

exports.CancelReservation = CancelReservation;