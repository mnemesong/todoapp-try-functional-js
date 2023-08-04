export * as widgets from "./widgets"

import * as todo from "../todo-domain"
import * as widgets from "./widgets"

export type T = {
    resps: string,
    form: string,
}

export const prepare = (
    t: todo.T
): T => ({
    resps: t.responsibles.map(r => widgets.resp.render(
        r,
        r.tasks.map(t => widgets.task.render(t)).join('')
    )).join(''),
    form: widgets.form.render(t.form),
})