"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inContextOfTodo = exports.fromTodo = exports.toTodo = void 0;
var toTodo = function (t) { return ({
    responsibles: t.resps.map(function (r) { return ({
        id: r.id,
        name: r.name,
        tasks: t.tasks.filter(function (t) { return t.resId === r.id; }).map(function (t) { return ({
            id: t.id,
            name: t.name,
            isReady: t.isReady
        }); })
    }); }),
    form: t.form,
}); };
exports.toTodo = toTodo;
var fromTodo = function (t) { return ({
    form: t.form,
    resps: t.responsibles.map(function (r) { return ({
        id: r.id,
        name: r.name,
    }); }),
    tasks: t.responsibles.reduce(function (acc, el) { return acc.concat(el.tasks.map(function (t) { return ({
        id: t.id,
        name: t.name,
        isReady: t.isReady,
        resId: el.id
    }); })); }, [])
}); };
exports.fromTodo = fromTodo;
var inContextOfTodo = function (t, f) { return (0, exports.fromTodo)(f((0, exports.toTodo)(t))); };
exports.inContextOfTodo = inContextOfTodo;
