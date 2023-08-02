"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchTasks = exports.applyForm = void 0;
var assert_1 = __importDefault(require("assert"));
var formR = __importStar(require("./form"));
var responsibleR = __importStar(require("./responsible"));
var uuid_1 = require("uuid");
function applyForm(t) {
    assert_1.default.ok(t.responsibles.map(function (el) { return el.id; }).includes(t.form.responsibleId));
    var newRess = t.responsibles.map(function (el) { return (el.id === t.form.responsibleId)
        ? responsibleR.withNewTask(el, {
            id: (0, uuid_1.v4)(),
            name: t.form.name,
            isReady: false
        })
        : el; });
    return {
        responsibles: newRess,
        form: formR.construct(t.responsibles[0].id),
    };
}
exports.applyForm = applyForm;
var switchTasks = function (t, taskIds) {
    var newRess = t.responsibles.map(function (el) { return taskIds.includes(el.id)
        ? responsibleR.switchManyTasks(el, taskIds)
        : el; });
    return {
        responsibles: newRess,
        form: t.form,
    };
};
exports.switchTasks = switchTasks;
