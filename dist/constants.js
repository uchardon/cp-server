"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CALLERROR_MESSAGE = exports.CALLRESULT_MESSAGE = exports.CALL_MESSAGE = exports.SOCKET_TIMEOUT = exports.OCPP_PROTOCOL_1_6 = exports.DEBUG_LIBNAME = void 0;
const DEBUG_LIBNAME = 'ocpp-eliftech';
exports.DEBUG_LIBNAME = DEBUG_LIBNAME;
const OCPP_PROTOCOL_1_6 = 'ocpp1.6';
exports.OCPP_PROTOCOL_1_6 = OCPP_PROTOCOL_1_6;
const SOCKET_TIMEOUT = 30 * 1000; // 30 sec
// ## MessageType constants
//
// To identify the type of message one of the following Message Type Numbers MUST be used.
//
// When a server receives a message with a Message Type Number not in this list, it SHALL ignore the
// message payload. Each message type may have additional required fields.

exports.SOCKET_TIMEOUT = SOCKET_TIMEOUT;
const CALL_MESSAGE = 2; // Client-to-Server

exports.CALL_MESSAGE = CALL_MESSAGE;
const CALLRESULT_MESSAGE = 3; // Server-to-Client

exports.CALLRESULT_MESSAGE = CALLRESULT_MESSAGE;
const CALLERROR_MESSAGE = 4; // Server-to-Client

exports.CALLERROR_MESSAGE = CALLERROR_MESSAGE;