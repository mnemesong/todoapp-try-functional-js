import * as todo from "../todo-domain"
import * as app from "."

export const toTodo = (t: app.T): todo.T => ({
    responsibles: t.resps.map(r => ({
        id: r.id,
        name: r.name,
        tasks: t.tasks.filter(t => t.resId === r.id).map(t => ({
            id: t.id,
            name: t.name,
            isReady: t.isReady
        }))
    })),
    form: t.form,
})

export const fromTodo = (t: todo.T): app.T => ({
    form: t.form,
    resps: t.responsibles.map(r => ({
        id: r.id,
        name: r.name,
    })),
    tasks: t.responsibles.reduce(
        (acc: app.records.task.T[], el) => acc.concat(el.tasks.map(t => ({
            id: t.id,
            name: t.name,
            isReady: t.isReady,
            resId: el.id
        }))),
        []
    )
})

export const inContextOfTodo = (
    t: app.T, 
    f: (app: todo.T) => todo.T
): app.T => fromTodo(f(toTodo(t)))