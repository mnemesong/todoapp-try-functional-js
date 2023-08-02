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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchManyTasks = exports.switchTask = exports.withNewTask = exports.clone = exports.task = void 0;
var taskR = __importStar(require("./task"));
exports.task = __importStar(require("./task"));
var clone = function (u) { return (__assign({}, u)); };
exports.clone = clone;
var withNewTask = function (t, task) { return ({
    id: t.id,
    name: t.name,
    tasks: __spreadArray(__spreadArray([], t.tasks, true), [task], false)
}); };
exports.withNewTask = withNewTask;
var switchTask = function (t, taskId) { return ({
    id: t.id,
    name: t.name,
    tasks: t.tasks.map(function (el) { return (el.id === taskId) ? taskR.switchTask(el) : el; })
}); };
exports.switchTask = switchTask;
var switchManyTasks = function (t, taskIds) { return taskIds
    .reduce(function (acc, tId) { return (0, exports.switchTask)(t, tId); }, t); };
exports.switchManyTasks = switchManyTasks;
