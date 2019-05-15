"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeAvailability = exports.STATUS_SCHEDULED = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.TYPE_OPERATIVE = exports.TYPE_INOPERATIVE = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _ChangeAvailability = _interopRequireDefault(require("../../ocpp-1.6-schemas/ChangeAvailability"));

var _ChangeAvailabilityResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/ChangeAvailabilityResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TYPE_INOPERATIVE = 'Inoperative';
exports.TYPE_INOPERATIVE = TYPE_INOPERATIVE;
const TYPE_OPERATIVE = 'Operative';
exports.TYPE_OPERATIVE = TYPE_OPERATIVE;
const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;
const STATUS_SCHEDULED = 'Scheduled';
exports.STATUS_SCHEDULED = STATUS_SCHEDULED;

class ChangeAvailability extends _BaseCommand.default {
  constructor(values) {
    super(_ChangeAvailability.default, _ChangeAvailabilityResponse.default, values);
  }

}

exports.ChangeAvailability = ChangeAvailability;