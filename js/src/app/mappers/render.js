"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRender = void 0;
var toRender = function (t, config) { return ({
    resps: t.resps.map(function (el) { return config.respRender(el, t.tasks.filter(function (t) { return t.resId === el.id; }).map(function (t) { return config.taskRender(t); }).join('')); }).join(''),
    form: config.formRender(t.form),
}); };
exports.toRender = toRender;
