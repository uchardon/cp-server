"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ws = _interopRequireDefault(require("ws"));

var _connection = require("./connection");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CentralSystemClient {
  constructor(connection) {
    this.connection = connection;
  }

}

exports.default = CentralSystemClient;