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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withFormData = exports.switchTasks = exports.applyForm = exports.form = exports.resp = void 0;
var formR = __importStar(require("./form"));
var responsibleR = __importStar(require("./responsible"));
var uuid_1 = require("uuid");
exports.resp = __importStar(require("./responsible"));
exports.form = __importStar(require("./form"));
function applyForm(t) {
    if (!t.responsibles.map(function (el) { return el.id; }).includes(t.form.responsibleId)) {
        return { error: "form contains invalid responsible ID" };
    }
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
    var newRess = t.responsibles.map(function (el) { return responsibleR.switchManyTasks(el, taskIds); });
    return {
        responsibles: newRess,
        form: t.form,
    };
};
exports.switchTasks = switchTasks;
var withFormData = function (t, name, resId) { return ({
    responsibles: t.responsibles,
    form: { name: name, responsibleId: resId }
}); };
exports.withFormData = withFormData;
