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
exports.handle = void 0;
var domain = __importStar(require("./domain"));
var handle = function (param, query) {
    if (param.c.com === 'add-task') {
        var result = domain.page.applyForm(param.state);
        if (result['error']) {
            console.log("Ошибка: " + result['error']);
            return { result: param.state };
        }
        return { result: result };
    }
    if (param.c.com === 'change-form') {
        if (query) {
            return { result: domain.page.withFormData(param.state, query.result.changeFormVal, param.state.form.responsibleId) };
        }
        return { query: 'change-form-val' };
    }
    if (param.c.com === 'switch-task-check') {
        return { result: domain.page.switchTasks(param.state, [param.c.id]) };
    }
};
exports.handle = handle;
