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
exports.updatePage = exports.setNewPage = exports.getNewPage = exports.getOldPage = void 0;
var data = __importStar(require("../data"));
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
var getOldPage = function () { return state.oldPage; };
exports.getOldPage = getOldPage;
var getNewPage = function () { return state.newPage; };
exports.getNewPage = getNewPage;
var setNewPage = function (p) {
    state.newPage = p;
};
exports.setNewPage = setNewPage;
var updatePage = function () {
    state.oldPage = state.newPage;
};
exports.updatePage = updatePage;
