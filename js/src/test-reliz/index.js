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
exports.getState = exports.getTemplate = exports.setFormName = exports.applyForm = exports.switchTask = exports.rerender = exports.reinitState = void 0;
var app = __importStar(require("../app"));
var renderConfig = ({
    taskRender: function (m) { return "<task name=\"".concat(m.name, "\" ready=\"").concat(m.isReady, "\">"); },
    respRender: function (m, t) { return "<resp name=\"".concat(m.name, "\">").concat(t, "</resp>"); },
    formRender: function (m) { return "<form name=\"".concat(m.name, "\">"); }
});
var renderTemplate = function (resps, form) { return "<app>".concat(resps).concat(form, "</app>"); };
var template = renderTemplate('', '');
var state = ({
    resps: [],
    tasks: [],
    form: {
        name: "",
        responsibleId: ""
    }
});
var reinitState = function () {
    state = ({
        resps: [
            { id: "34e96a3e-dfad-412c-93a2-125f8697750b", name: "Mary" },
            { id: "6d4c7b04-bcce-4309-804c-b5337a5f760a", name: "John" },
        ],
        tasks: [
            {
                id: "eccdcf42-2521-4e7d-8991-41ea50274c51",
                resId: "34e96a3e-dfad-412c-93a2-125f8697750b",
                name: "Kiss the cat",
                isReady: false,
            },
            {
                id: "ef43d0b0-5226-441f-96f9-fa574caa5b9f",
                resId: "34e96a3e-dfad-412c-93a2-125f8697750b",
                name: "Buy the milk",
                isReady: true,
            },
            {
                id: "ef176caf-f06c-4535-bf55-f1891dac00a0",
                resId: "6d4c7b04-bcce-4309-804c-b5337a5f760a",
                name: "Found the home",
                isReady: false,
            },
        ],
        form: {
            name: "",
            responsibleId: "6d4c7b04-bcce-4309-804c-b5337a5f760a"
        }
    });
};
exports.reinitState = reinitState;
var rerender = function () {
    var _a = app.appToRender
        .toRender(state, renderConfig), resps = _a.resps, form = _a.form;
    template = renderTemplate(resps, form);
};
exports.rerender = rerender;
var switchTask = function (taskId) {
    state = app.switchTask(state, taskId);
};
exports.switchTask = switchTask;
var applyForm = function () {
    state = app.applyForm(state);
};
exports.applyForm = applyForm;
var setFormName = function (name) {
    state.form.name = name;
};
exports.setFormName = setFormName;
var getTemplate = function () { return template; };
exports.getTemplate = getTemplate;
var getState = function () { return state; };
exports.getState = getState;
