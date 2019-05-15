"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPropertiesValidators = applyPropertiesValidators;
exports.getObjectValues = getObjectValues;

var _joi = _interopRequireDefault(require("joi"));

var _enjoi = _interopRequireDefault(require("enjoi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MODEL_VALUES_SYMBOL = Symbol('modelValues');

function applyPropertiesValidators(object, schema, values = {}) {
  console.log('OBJ: ', object);
  console.log('schema: ', schema);
  console.log('values: ', values);
  const joiSchema = new _enjoi.default.schema(schema); //console.log('>>>>>>>>>>>>>joiSchema: ', joiSchema);

  object[MODEL_VALUES_SYMBOL] = {};
  const properties = {};

  for (let key in schema.properties) {
    if (!schema.properties.hasOwnProperty(key)) {
      return;
    }

    const validator = _joi.default.reach(joiSchema, key);

    validate(key, values[key], validator);
    object[MODEL_VALUES_SYMBOL][key] = values[key];
    properties[key] = {
      get: () => object[MODEL_VALUES_SYMBOL][key],
      set: val => {
        validate(key, val, validator);
        val === undefined ? delete object[MODEL_VALUES_SYMBOL][key] : object[MODEL_VALUES_SYMBOL][key] = val;
      },
      enumerable: true,
      configurable: false
    };
  }

  Object.defineProperties(object, properties);

  function validate(fieldName, value, schema) {
    const {
      error
    } = _joi.default.validate(value, schema);

    if (error !== null) {
      throw new Error(`Invalid value "${value}" for field ${fieldName}`);
    }
  }
}

function getObjectValues(object) {
  const values = { ...(object[MODEL_VALUES_SYMBOL] || {})
  };

  for (let key in values) {
    if (!values.hasOwnProperty(key)) {
      return;
    }

    if (values[key] === undefined) {
      delete values[key];
    }
  }

  return object[MODEL_VALUES_SYMBOL];
}