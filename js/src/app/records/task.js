"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNew = void 0;
var uuid_1 = require("uuid");
var createNew = function (name, resId) { return ({
    id: (0, uuid_1.v4)(),
    name: name,
    isReady: false,
    resId: resId
}); };
exports.createNew = createNew;
