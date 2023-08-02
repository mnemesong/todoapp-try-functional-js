import * as r from "./records"
import * as todo from "../todo-domain"
import * as mapTodo from "./app-to-todo"
import * as mapRender from "./app-to-render"

export * as records from "./records"
export * as appToRender from "./app-to-render"
export * as appToTodo from "./app-to-todo"

export type T = {
    form: r.form.T,
    resps: r.resp.T[],
    tasks: r.task.T[],
}

export const applyForm = (t: T): T => mapTodo
    .inContextOfTodo(t, (app) => todo.applyForm(app))

export const switchTask = (t: T, taskId: string): T => mapTodo
    .inContextOfTodo(t, (app) => todo.switchTasks(app, [taskId]))

export const render = mapRender.toRender