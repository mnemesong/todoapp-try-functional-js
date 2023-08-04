"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var render = function (resp, tasks) { return "\n<ol id=\"resp-".concat(resp.id, "\">\n    <li>").concat(resp.name, "</li>\n    <ol>").concat(tasks, "</ol>\n</ol>"); };
exports.render = render;
