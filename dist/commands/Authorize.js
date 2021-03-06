"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authorize = exports.STATUS_CONCURRENTTX = exports.STATUS_INVALID = exports.STATUS_EXPIRED = exports.STATUS_BLOCKED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _Authorize = _interopRequireDefault(require("../../ocpp-1.6-schemas/Authorize"));

var _AuthorizeResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/AuthorizeResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_BLOCKED = 'Blocked';
exports.STATUS_BLOCKED = STATUS_BLOCKED;
const STATUS_EXPIRED = 'Expired';
exports.STATUS_EXPIRED = STATUS_EXPIRED;
const STATUS_INVALID = 'Invalid';
exports.STATUS_INVALID = STATUS_INVALID;
const STATUS_CONCURRENTTX = 'ConcurrentTx';
exports.STATUS_CONCURRENTTX = STATUS_CONCURRENTTX;

class Authorize extends _BaseCommand.default {
  constructor(values) {
    super(_Authorize.default, _AuthorizeResponse.default, values);
  }

}

exports.Authorize = Authorize;