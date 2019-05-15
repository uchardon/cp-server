"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTransfer = exports.STATUS_UNKNOWNVENDORID = exports.STATUS_UNKNOWNMESSAGEID = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _DataTransfer = _interopRequireDefault(require("../../ocpp-1.6-schemas/DataTransfer"));

var _DataTransferResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/DataTransferResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;
const STATUS_UNKNOWNMESSAGEID = 'UnknownMessageId';
exports.STATUS_UNKNOWNMESSAGEID = STATUS_UNKNOWNMESSAGEID;
const STATUS_UNKNOWNVENDORID = 'UnknownVendorId';
exports.STATUS_UNKNOWNVENDORID = STATUS_UNKNOWNVENDORID;

class DataTransfer extends _BaseCommand.default {
  constructor(values) {
    super(_DataTransfer.default, _DataTransferResponse.default, values);
  }

}

exports.DataTransfer = DataTransfer;