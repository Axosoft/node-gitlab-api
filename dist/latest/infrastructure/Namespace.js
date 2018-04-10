"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

function init(...services) {
  const combined = Object.assign({}, ...services);
  return class Namespace {
    constructor(options) {
      Object.entries(combined).forEach(([name, Service]) => {
        this[name] = new Service(options);
      });
    }

  };
}