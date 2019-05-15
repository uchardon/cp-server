"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearCache = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _ClearCache = _interopRequireDefault(require("../../ocpp-1.6-schemas/ClearCache"));

var _ClearCacheResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/ClearCacheResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;

class ClearCache extends _BaseCommand.default {
  constructor(values) {
    super(_ClearCache.default, _ClearCacheResponse.default, values);
  }

}

exports.ClearCache = ClearCache;