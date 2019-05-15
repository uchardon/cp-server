"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearChargingProfile = exports.STATUS_UNKNOWN = exports.STATUS_ACCEPTED = exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _ClearChargingProfile = _interopRequireDefault(require("../../ocpp-1.6-schemas/ClearChargingProfile"));

var _ClearChargingProfileResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/ClearChargingProfileResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = 'ChargePointMaxProfile';
exports.CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE = CHARGING_PROFILE_PURPOSE_CHARGEPOINTMAXPROFILE;
const CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = 'TxDefaultProfile';
exports.CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE = CHARGING_PROFILE_PURPOSE_TXDEFAULTPROFILE;
const CHARGING_PROFILE_PURPOSE_TXPROFILE = 'TxProfile';
exports.CHARGING_PROFILE_PURPOSE_TXPROFILE = CHARGING_PROFILE_PURPOSE_TXPROFILE;
const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_UNKNOWN = 'Unknown';
exports.STATUS_UNKNOWN = STATUS_UNKNOWN;

class ClearChargingProfile extends _BaseCommand.default {
  constructor(values) {
    super(_ClearChargingProfile.default, _ClearChargingProfileResponse.default, values);
  }

}

exports.ClearChargingProfile = ClearChargingProfile;