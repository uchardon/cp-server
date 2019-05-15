"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendLocalList = exports.STATUS_VERSIONMISMATCH = exports.STATUS_NOTSUPPORTED = exports.STATUS_FAILED = exports.STATUS_ACCEPTED = exports.UPDATE_TYPE_FULL = exports.UPDATE_TYPE_DIFFERENTIAL = exports.IDTAGINFO_STATUS_CONCURRENTTX = exports.IDTAGINFO_STATUS_INVALID = exports.IDTAGINFO_STATUS_EXPIRED = exports.IDTAGINFO_STATUS_BLOCKED = exports.IDTAGINFO_STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _SendLocalList = _interopRequireDefault(require("../../ocpp-1.6-schemas/SendLocalList"));

var _SendLocalListResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/SendLocalListResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IDTAGINFO_STATUS_ACCEPTED = 'Accepted';
exports.IDTAGINFO_STATUS_ACCEPTED = IDTAGINFO_STATUS_ACCEPTED;
const IDTAGINFO_STATUS_BLOCKED = 'Blocked';
exports.IDTAGINFO_STATUS_BLOCKED = IDTAGINFO_STATUS_BLOCKED;
const IDTAGINFO_STATUS_EXPIRED = 'Expired';
exports.IDTAGINFO_STATUS_EXPIRED = IDTAGINFO_STATUS_EXPIRED;
const IDTAGINFO_STATUS_INVALID = 'Invalid';
exports.IDTAGINFO_STATUS_INVALID = IDTAGINFO_STATUS_INVALID;
const IDTAGINFO_STATUS_CONCURRENTTX = 'ConcurrentTx';
exports.IDTAGINFO_STATUS_CONCURRENTTX = IDTAGINFO_STATUS_CONCURRENTTX;
const UPDATE_TYPE_DIFFERENTIAL = 'Differential';
exports.UPDATE_TYPE_DIFFERENTIAL = UPDATE_TYPE_DIFFERENTIAL;
const UPDATE_TYPE_FULL = 'Full';
exports.UPDATE_TYPE_FULL = UPDATE_TYPE_FULL;
const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_FAILED = 'Failed';
exports.STATUS_FAILED = STATUS_FAILED;
const STATUS_NOTSUPPORTED = 'NotSupported';
exports.STATUS_NOTSUPPORTED = STATUS_NOTSUPPORTED;
const STATUS_VERSIONMISMATCH = 'VersionMismatch';
exports.STATUS_VERSIONMISMATCH = STATUS_VERSIONMISMATCH;

class SendLocalList extends _BaseCommand.default {
  constructor(values) {
    super(_SendLocalList.default, _SendLocalListResponse.default, values);
  }

}

exports.SendLocalList = SendLocalList;