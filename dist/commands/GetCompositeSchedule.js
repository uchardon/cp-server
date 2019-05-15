"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCompositeSchedule = exports.CHARGING_RATE_UNIT_W = exports.CHARGING_RATE_UNIT_A = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _GetCompositeSchedule = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetCompositeSchedule"));

var _GetCompositeScheduleResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/GetCompositeScheduleResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;
const CHARGING_RATE_UNIT_A = 'A';
exports.CHARGING_RATE_UNIT_A = CHARGING_RATE_UNIT_A;
const CHARGING_RATE_UNIT_W = 'W';
exports.CHARGING_RATE_UNIT_W = CHARGING_RATE_UNIT_W;

class GetCompositeSchedule extends _BaseCommand.default {
  constructor(values) {
    super(_GetCompositeSchedule.default, _GetCompositeScheduleResponse.default, values);
  }

}

exports.GetCompositeSchedule = GetCompositeSchedule;