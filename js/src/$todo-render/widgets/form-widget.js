"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var render = function (f) {
    return "\n    <div id=\"form-cont\">\n        <input type=\"text\" value=\"".concat(f.name, "\" id=\"form-input\">\n        <button type=\"button\" id=\"submit-btn\">Submit</button>\n    </div>");
};
exports.render = render;
