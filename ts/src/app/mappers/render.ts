import * as records from "../records"
import * as abstr from "../../abstracts"
import * as render from "../../render"

export type RenderConfig = {
    task: abstr.render.config.T<records.task.T>,
    resp: abstr.render.config.T<records.resp.T>,
    form: abstr.render.config.T<records.form.T>,
}

export const toRender = (
    t: records.state.T, 
    config: RenderConfig
): render.state.T => ({
    tasks: abstr.render.config.renderMany(config.task, t.tasks),
    forms: abstr.render.config.renderMany(config.form, [t.form]),
    resps: abstr.render.config.renderMany(config.resp, t.resps),
})