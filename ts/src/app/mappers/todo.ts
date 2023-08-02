import * as todo from "../../todo"
import * as records from "../records"

export const toTodo = (t: records.state.T): todo.app.T => ({
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

export const fromTodo = (t: todo.app.T): records.state.T => ({
    form: t.form,
    resps: t.responsibles.map(r => ({
        id: r.id,
        name: r.name,
    })),
    tasks: t.responsibles.reduce(
        (acc: records.task.T[], el) => acc.concat(el.tasks.map(t => ({
            id: t.id,
            name: t.name,
            isReady: t.isReady,
            resId: el.id
        }))),
        []
    )
})

export const inContextOfTodo = (
    t: records.state.T, 
    f: (app: todo.app.T) => todo.app.T
): records.state.T => fromTodo(f(toTodo(t)))