"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = exports.clone = void 0;
var clone = function (t) { return ({ name: t.name, responsibleId: t.responsibleId }); };
exports.clone = clone;
var construct = function (defResId) { return ({ name: "", responsibleId: defResId }); };
exports.construct = construct;
