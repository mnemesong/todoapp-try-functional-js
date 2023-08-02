"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchTask = exports.createNew = exports.clone = void 0;
var clone = function (u) { return (__assign({}, u)); };
exports.clone = clone;
var createNew = function (id, name) { return ({
    id: id,
    name: name,
    isReady: false,
}); };
exports.createNew = createNew;
var switchTask = function (t) { return ({
    id: t.id,
    name: t.name,
    isReady: !t.isReady
}); };
exports.switchTask = switchTask;
