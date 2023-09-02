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
exports.handleCommand = void 0;
var data = __importStar(require("../data"));
var src = __importStar(require("../functions"));
var handleCommand = function (c, state) {
    if (c.com === 'add-task') {
        var result = src.domain.page.applyForm(state);
        if (result['error']) {
            console.log("Ошибка: " + result['error']);
            return state;
        }
        return result;
    }
    if (c.com === 'change-form') {
        var formInput = document.querySelector(data.appConfig.config.formWidget.inputSelector);
        if (formInput instanceof HTMLInputElement) {
            return src.domain.page
                .withFormData(state, formInput.value, state.form.responsibleId);
        }
        return state;
    }
    if (c.com === 'switch-task-check') {
        return src.domain.page.switchTasks(state, [c.id]);
    }
};
exports.handleCommand = handleCommand;
