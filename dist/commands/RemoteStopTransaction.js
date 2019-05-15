"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoteStopTransaction = exports.STATUS_REJECTED = exports.STATUS_ACCEPTED = void 0;

var _BaseCommand = _interopRequireDefault(require("./BaseCommand"));

var _RemoteStopTransaction = _interopRequireDefault(require("../../ocpp-1.6-schemas/RemoteStopTransaction"));

var _RemoteStopTransactionResponse = _interopRequireDefault(require("../../ocpp-1.6-schemas/RemoteStopTransactionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_ACCEPTED = 'Accepted';
exports.STATUS_ACCEPTED = STATUS_ACCEPTED;
const STATUS_REJECTED = 'Rejected';
exports.STATUS_REJECTED = STATUS_REJECTED;

class RemoteStopTransaction extends _BaseCommand.default {
  constructor(values) {
    super(_RemoteStopTransaction.default, _RemoteStopTransactionResponse.default, values);
  }

}

exports.RemoteStopTransaction = RemoteStopTransaction;