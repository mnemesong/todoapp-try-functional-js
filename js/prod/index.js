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
var src = __importStar(require("../src"));
src.todoSaver.$saveTodo(src.todoDomain.init());
var render = function () {
    var renderResult = src.todoRender.prepare(src.todoSaver.$getTodo());
    document.querySelector('#resps-host').innerHTML = renderResult.resps;
    document.querySelector('#form-host').innerHTML = renderResult.form;
    src.todoSaver.$getTodo().responsibles.forEach(function (r) {
        r.tasks.forEach(function (t) {
            try {
                document.querySelector('#task-' + t.id).onclick = function () {
                    src.todoSaver.$saveTodo(src.todoDomain.switchTasks(src.todoSaver.$getTodo(), [t.id]));
                    (0, exports.render)();
                };
            }
            catch (e) { }
        });
    });
    try {
        document.querySelector("#submit-btn").onclick = function () {
            var todoVal1 = src.todoSaver.$getTodo();
            var formVal = document.getElementById('form-input').value;
            if (!!formVal) {
                var resId = src.todoSaver.$getTodo().form.responsibleId;
                src.todoSaver.$saveTodo(src.todoDomain.withFormData(src.todoSaver.$getTodo(), formVal, resId));
            }
            var todoVal2 = (!!formVal)
                ? src.todoDomain.withFormData(src.todoSaver.$getTodo(), formVal, todoVal1.form.responsibleId)
                : todoVal1;
            var todoVal3 = src.todoDomain.applyForm(todoVal2);
            src.todoSaver.$saveTodo(todoVal3);
            (0, exports.render)();
        };
    }
    catch (e) { }
};
exports.render = render;
(0, exports.render)();
