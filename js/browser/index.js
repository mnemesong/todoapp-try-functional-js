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
var src = __importStar(require("../functions"));
var data = __importStar(require("../data"));
var commandHandler = __importStar(require("./command-handler"));
var state = {
    oldPage: {
        form: {
            responsibleId: "",
            name: ""
        },
        responsibles: []
    },
    newPage: data.page.init
};
var rerender = function () {
    var updates = src.browserUpdate
        .updateBrowser(state.oldPage, state.newPage, data.appConfig.config);
    updates.rerenderCommands.forEach(function (c) { return handleRerenderCommand(c); });
    updates.setEventCommands.forEach(function (c) { return handleSetEventCommand(c); });
    state.oldPage = state.newPage;
};
var handleSetEventCommand = function (com) {
    try {
        var el = document.querySelector(com.selector);
        var event_1 = function () { return com.commands.forEach(function (c) {
            var oldState = state.newPage;
            state.newPage = commandHandler.handleCommand(c, state.newPage);
            rerender();
        }); };
        if (com.event === 'click') {
            el.onclick = event_1;
            console.log("set event onclick on " + com.selector);
        }
        if (com.event === 'change') {
            el.onchange = event_1;
            console.log("set event onchange on " + com.selector);
        }
    }
    catch (e) {
        throw new Error("Error at executing command: " + JSON.stringify(com)
            + ": " + e);
    }
};
var handleRerenderCommand = function (com) {
    document.querySelector(com.selector).innerHTML = com.content;
};
rerender();
