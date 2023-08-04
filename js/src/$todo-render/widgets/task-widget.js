"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var render = function (task) {
    return "\n    <li id=\"task-".concat(task.id, "\">").concat(task.isReady ? "<b>".concat(task.name, "</b>") : task.name, "</li>");
};
exports.render = render;
