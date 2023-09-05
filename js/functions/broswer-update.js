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
exports.updateBrowser = exports.addCommandsAndEvents = void 0;
var widgets = __importStar(require("./widgets"));
var deepEqual = __importStar(require("deep-equal"));
var templateProto = __importStar(require("../template-protocol"));
var addCommandsAndEvents = function (t, commands, events) { return ({
    rerenderCommands: t.rerenderCommands.concat(commands),
    setEventCommands: t.setEventCommands.concat(events),
}); };
exports.addCommandsAndEvents = addCommandsAndEvents;
var updateBrowser = function (state1, state2, appConfig) {
    var result = { rerenderCommands: [], setEventCommands: [] };
    if (!deepEqual.default(state1.form, state2.form)) {
        result = (0, exports.addCommandsAndEvents)(result, [{
                command: 'innerHtml',
                selector: appConfig.formsRootSelector,
                content: widgets.form.renderContent(state2.form, appConfig.formWidget)
            }], [
            {
                selector: appConfig.formWidget.btnSelector,
                event: 'click',
                commands: [
                    { com: "change-form" },
                    { com: "add-task" },
                ]
            },
            {
                selector: appConfig.formWidget.inputSelector,
                event: "change",
                commands: [{ com: "change-form" },]
            }
        ]);
    }
    if (!deepEqual.default(state1.responsibles, state2.responsibles)) {
        result = (0, exports.addCommandsAndEvents)(result, [{
                command: "innerHtml",
                selector: appConfig.respsRootSelector,
                content: state2.responsibles.map(function (r) { return widgets.resp
                    .renderContent(r, appConfig.respWidget); })
                    .join('')
            }], state2.responsibles.reduce(function (acc, respEl) {
            return acc.concat(respEl.tasks.map(function (t) { return ({
                id: t.id,
                sel: templateProto.render(appConfig.respWidget.taskWidget.onclickSelector, {
                    id: t.id
                })
            }); }));
        }, []).map(function (el) { return ({
            selector: el.sel,
            event: 'click',
            commands: [{ com: 'switch-task-check', id: el.id }]
        }); }));
    }
    return result;
};
exports.updateBrowser = updateBrowser;
