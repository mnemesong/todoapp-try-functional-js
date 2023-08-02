"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.unclosedTags = void 0;
exports.unclosedTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img',
    'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
var render = function (t) { return "\n<".concat(t[0]).concat(Object.keys(t[1]).map(function (k) { return ' ' + k + '="' + t[1][k] + '"'; }), ">")
    + ((exports.unclosedTags.includes(t[0]))
        ? ''
        : (t[2].map(function (k) { return (0, exports.render)(k); }).join("") + "</".concat(t[0], ">"))); };
exports.render = render;
