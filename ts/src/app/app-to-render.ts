import * as app from "."
import * as render from "../render"

export type RenderConfig = {
    taskRender: (m: app.records.task.T) => string,
    respRender: (m: app.records.resp.T, tasks: string) => string,
    formRender: (m: app.records.form.T) => string,
}

export const toRender = (
    t: app.T, 
    config: RenderConfig
): render.T => ({
    resps: t.resps.map(el => config.respRender(
        el, 
        t.tasks.filter(t => t.resId === el.id).map(t => config.taskRender(t)).join('')
    )).join(''),
    form: config.formRender(t.form),
})