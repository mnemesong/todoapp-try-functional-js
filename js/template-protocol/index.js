"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
function replaceAll(template, search, replace) {
    var result = template.replace(search, replace);
    while (result !== template) {
        template = result;
        result = template.replace(search, replace);
    }
    return result;
}
function render(template, insertions) {
    var result = template.template;
    Object.keys(insertions).forEach(function (k) {
        result = replaceAll(result, "{{".concat(k, "}}"), insertions[k]);
    });
    return result;
}
exports.render = render;
