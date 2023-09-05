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
exports.handleRerenderCommand = exports.handleSetEventCommand = void 0;
var stateEngine = __importStar(require("./state"));
var handleSetEventCommand = function (com, rerender) {
    try {
        var el = document.querySelector(com.selector);
        var event_1 = function () { return com.commands.forEach(function (c) {
            stateEngine.setNewPage(stateEngine.handleCommand(c, stateEngine.getNewPage()));
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
exports.handleSetEventCommand = handleSetEventCommand;
var handleRerenderCommand = function (com) {
    document.querySelector(com.selector).innerHTML = com.content;
};
exports.handleRerenderCommand = handleRerenderCommand;
