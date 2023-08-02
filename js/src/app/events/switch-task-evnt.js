"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = exports.create = exports.e = void 0;
exports.e = 'switch-task';
var create = function (id) { return [exports.e, { id: id }]; };
exports.create = create;
var isValid = function (some) { return some[0] === exports.e; };
exports.isValid = isValid;
