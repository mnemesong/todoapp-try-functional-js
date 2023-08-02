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
exports.render = exports.switchTask = exports.applyForm = exports.appToTodo = exports.appToRender = exports.records = void 0;
var todo = __importStar(require("../todo-domain"));
var mapTodo = __importStar(require("./app-to-todo"));
var mapRender = __importStar(require("./app-to-render"));
exports.records = __importStar(require("./records"));
exports.appToRender = __importStar(require("./app-to-render"));
exports.appToTodo = __importStar(require("./app-to-todo"));
var applyForm = function (t) { return mapTodo
    .inContextOfTodo(t, function (app) { return todo.applyForm(app); }); };
exports.applyForm = applyForm;
var switchTask = function (t, taskId) { return mapTodo
    .inContextOfTodo(t, function (app) { return todo.switchTasks(app, [taskId]); }); };
exports.switchTask = switchTask;
exports.render = mapRender.toRender;
