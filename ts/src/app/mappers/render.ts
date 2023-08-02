import * as records from "../records"
import * as render from "../../render"

export type RenderConfig = {
    taskRender: (m: records.task.T) => string,
    respRender: (m: records.resp.T, tasks: string) => string,
    formRender: (m: records.form.T) => string,
}

export const toRender = (
    t: records.store.T, 
    config: RenderConfig
): render.state.T => ({
    resps: t.resps.map(el => config.respRender(
        el, 
        t.tasks.filter(t => t.resId === el.id).map(t => config.taskRender(t)).join('')
    )).join(''),
    form: config.formRender(t.form),
})