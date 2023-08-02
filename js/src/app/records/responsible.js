"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTodoResponsible = exports.createNew = void 0;
var uuid_1 = require("uuid");
var createNew = function (name) { return ({
    id: (0, uuid_1.v4)(),
    name: name,
}); };
exports.createNew = createNew;
var toTodoResponsible = function (t, tasks) {
    if (tasks === void 0) { tasks = []; }
    return ({
        id: t.id,
        name: t.name,
        tasks: tasks,
    });
};
exports.toTodoResponsible = toTodoResponsible;
