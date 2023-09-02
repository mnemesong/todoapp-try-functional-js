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
exports.merge = void 0;
var merge = function (t) {
    return t.reduce(function (acc, selector) { return Object.keys(selector)
        .reduce(function (sAcc, k) {
        var _a, _b;
        return (sAcc[k])
            ? __assign(__assign({}, sAcc), (_a = {}, _a[k] = sAcc[k] + selector[k], _a)) : __assign(__assign({}, sAcc), (_b = {}, _b[k] = selector[k], _b));
    }, acc); }, {});
};
exports.merge = merge;
