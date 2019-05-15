"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetChargingProfile = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = exports.CHARGING_RATE_UNIT_W = exports.CHARGING_RATE_UNIT_A = exports.RECURRENCY_KIND_WEEKLY = exports.RECURRENCY_KIND_DAILY = exports.CHARGING_PROFILE_KIND_RELATIVE = exports.CHARGING_PROFILE_KIND_RECURRING = exports.CHARGING_PROFILE_KIND_ABSOLUTE = exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _SetChargingProfile = _interopRequireDefault(require("../../ocpp-1.6-schemas/SetChargingProfile"));

var _SetChargingProfileResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/SetChargingProfileResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = 'ChargePointMaxProfile';
exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE;
const CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = 'TxDefaultProfile';
exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE;
const CHARGING_PROFILE_PURPOSE_TXPROFILE = 'TxProfile';
exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = CHARGING_PROFILE_PURPOSE_TXPROFILE;
const CHARGING_PROFILE_KIND_ABSOLUTE = 'Absolute';
exports.CHARGING_PROFILE_KIND_ABSOLUTE = CHARGING_PROFILE_KIND_ABSOLUTE;
const CHARGING_PROFILE_KIND_RECURRING = 'Recurring';
exports.CHARGING_PROFILE_KIND_RECURRING = CHARGING_PROFILE_KIND_RECURRING;
const CHARGING_PROFILE_KIND_RELATIVE = 'Relative';
exports.CHARGING_PROFILE_KIND_RELATIVE = CHARGING_PROFILE_KIND_RELATIVE;
const RECURRENCY_KIND_DAILY = 'Daily';
exports.RECURRENCY_KIND_DAILY = RECURRENCY_KIND_DAILY;
const RECURRENCY_KIND_WEEKLY = 'Weekly';
exports.RECURRENCY_KIND_WEEKLY = RECURRENCY_KIND_WEEKLY;
const CHARGING_RATE_UNIT_A = 'A';
exports.CHARGING_RATE_UNIT_A = CHARGING_RATE_UNIT_A;
const CHARGING_RATE_UNIT_W = 'W';
exports.CHARGING_RATE_UNIT_W = CHARGING_RATE_UNIT_W;
const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;

class SetChargingProfile extends _BaseCommand.default {
  constructor(values) {
    super(_SetChargingProfile.default, _SetChargingProfileResponse.default, values);
  }

}

exports.SetChargingProfile = SetChargingProfile;