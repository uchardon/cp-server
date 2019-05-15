"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ERROR_GENERICERROR = exports.ERROR_TYPECONSTRAINTVIOLATION = exports.ERROR_OCCURENCECONSTRAINTVIOLATION = exports.ERROR_PROPERTYCONSTRAINTVIOLATION = exports.ERROR_FORMATIONVIOLATION = exports.ERROR_SECURITYERROR = exports.ERROR_PROTOCOLERROR = exports.ERROR_INTERNALERROR = exports.ERROR_NOTSUPPORTED = exports.ERROR_NOTIMPLEMENTED = void 0;
// Requested Action is not known by receiver
const ERROR_NOTIMPLEMENTED = 'NotImplemented'; // Requested Action is recognized but not supported by the receiver

exports.ERROR_NOTIMPLEMENTED = ERROR_NOTIMPLEMENTED;
const ERROR_NOTSUPPORTED = 'NotSupported'; // An internal error occurred and the receiver was not able to process the requested Action successfully

exports.ERROR_NOTSUPPORTED = ERROR_NOTSUPPORTED;
const ERROR_INTERNALERROR = 'InternalError'; // Payload for Action is incomplete

exports.ERROR_INTERNALERROR = ERROR_INTERNALERROR;
const ERROR_PROTOCOLERROR = 'ProtocolError'; // During the processing of Action a security issue occurred preventing receiver from completing the Action successfully

exports.ERROR_PROTOCOLERROR = ERROR_PROTOCOLERROR;
const ERROR_SECURITYERROR = 'SecurityError'; // Payload for Action is syntactically incorrect or not conform the PDU structure for Action

exports.ERROR_SECURITYERROR = ERROR_SECURITYERROR;
const ERROR_FORMATIONVIOLATION = 'FormationViolation'; // Payload is syntactically correct but at least one field contains an invalid value

exports.ERROR_FORMATIONVIOLATION = ERROR_FORMATIONVIOLATION;
const ERROR_PROPERTYCONSTRAINTVIOLATION = 'PropertyConstraintViolation'; // Payload for Action is syntactically correct but at least one of the fields violates occurence constraints

exports.ERROR_PROPERTYCONSTRAINTVIOLATION = ERROR_PROPERTYCONSTRAINTVIOLATION;
const ERROR_OCCURENCECONSTRAINTVIOLATION = 'OccurenceConstraintViolation'; // Payload for Action is syntactically correct but at least one of the fields violates data type constraints (e.g. “somestring”: 12)

exports.ERROR_OCCURENCECONSTRAINTVIOLATION = ERROR_OCCURENCECONSTRAINTVIOLATION;
const ERROR_TYPECONSTRAINTVIOLATION = 'TypeConstraintViolation'; // Any other error not covered by the previous ones

exports.ERROR_TYPECONSTRAINTVIOLATION = ERROR_TYPECONSTRAINTVIOLATION;
const ERROR_GENERICERROR = 'GenericError';
exports.ERROR_GENERICERROR = ERROR_GENERICERROR;

class OCPPError extends Error {
  constructor(code, message, details) {
    super(message);
    this.code = code;
    this.message = message;
    this.details = details;
    Object.setPrototypeOf(this, OCPPError.prototype); // for instanceof

    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
  }

}

exports.default = OCPPError;