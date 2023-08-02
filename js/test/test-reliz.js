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
var app = __importStar(require("../src/app"));
var mocha_1 = require("mocha");
var assert = __importStar(require("assert"));
(0, mocha_1.describe)("test app realization", function () {
    (0, mocha_1.it)("test 1", function () {
        var renderConfig = ({
            taskRender: function (m) { return "<task name=\"".concat(m.name, "\" ready=\"").concat(m.isReady, "\">"); },
            respRender: function (m, t) { return "<resp name=\"".concat(m.name, "\">").concat(t, "</resp>"); },
            formRender: function (m) { return "<form name=\"".concat(m.name, "\">"); }
        });
        var renderTemplate = function (resps, form) { return "<app>".concat(resps).concat(form, "</app>"); };
        var template = renderTemplate('', '');
        var state = app.records.state.init();
        var rerender = function () {
            state = app.records.state.updateEventHistory(state);
            var _a = app.mappers.render.toRender(state.store, renderConfig), resps = _a.resps, form = _a.form;
            template = renderTemplate(resps, form);
        };
        var addEvent = function (e) {
            state.history = app.records.history.addEvent(state.history, e);
        };
        state.store.form.name = "ababa";
        addEvent(app.events.applyForm.create());
        rerender();
        assert.strictEqual(template, '<app>'
            + '<resp name="Mary">'
            + '<task name="Kiss the cat" ready="false">'
            + '<task name="Buy the milk" ready="true">'
            + '</resp>'
            + '<resp name="John">'
            + '<task name="Found the home" ready="false">'
            + '<task name="ababa" ready="false">'
            + '</resp>'
            + '<form name="">'
            + '</app>');
    });
});
