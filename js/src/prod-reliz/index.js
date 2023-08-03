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
exports.render = void 0;
var app = __importStar(require("../app"));
var todo = __importStar(require("../todo-domain"));
var state = {
    s: ({
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
    })
};
var renderConfig = {
    taskRender: function (m) { return "\n    <li id=\"task-".concat(m.id, "\">").concat(m.isReady ? "<b>".concat(m.name, "</b>") : m.name, "</li>"); },
    respRender: function (r, t) { return "\n    <ol id=\"resp-".concat(r.id, "\">\n        <li>").concat(r.name, "</li>\n        <ol>").concat(t, "</ol>\n    </ol>"); },
    formRender: function (f) { return "\n    <div id=\"form-cont\">\n        <input type=\"text\" value=\"".concat(f.name, "\" id=\"form-input\">\n        <button type=\"button\" id=\"submit-btn\">Submit</button>\n    </div>"); }
};
var render = function () {
    var renderResult = app.appToRender.toRender(state.s, renderConfig);
    document.querySelector('#resps-host').innerHTML = renderResult.resps;
    document.querySelector('#form-host').innerHTML = renderResult.form;
    state.s.tasks.forEach(function (t) {
        try {
            document.querySelector('#task-' + t.id).onclick = function () {
                state.s = app.appToTodo.fromTodo(todo.switchTasks(app.appToTodo.toTodo(state.s), [t.id]));
                (0, exports.render)();
            };
        }
        catch (e) { }
    });
    try {
        document.querySelector("#submit-btn").onclick = function () {
            var formVal = document.getElementById('form-input').value;
            if (!!formVal) {
                state.s.form.name = formVal;
            }
            state.s = app.appToTodo.fromTodo(todo.applyForm(app.appToTodo.toTodo(state.s)));
            (0, exports.render)();
        };
    }
    catch (e) { }
};
exports.render = render;
(0, exports.render)();
