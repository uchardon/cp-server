"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = require("../helpers");

const RESPONSE_SCHEMA_SYMBOL = Symbol('responseSchema');

class BaseCommand {
  constructor(requestSchema, responseSchema, values) {
    this[RESPONSE_SCHEMA_SYMBOL] = responseSchema;
    (0, _helpers.applyPropertiesValidators)(this, requestSchema, values);
  }

  getCommandName() {
    return this.constructor.name;
  }

  createResponse(payload) {
    const response = new function () {}();
    (0, _helpers.applyPropertiesValidators)(response, this[RESPONSE_SCHEMA_SYMBOL], payload);
    return response;
  }

}

exports.default = BaseCommand;