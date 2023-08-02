import * as app from ".";
import * as render from "../render";
export type RenderConfig = {
    taskRender: (m: app.records.task.T) => string;
    respRender: (m: app.records.resp.T, tasks: string) => string;
    formRender: (m: app.records.form.T) => string;
};
export declare const toRender: (t: app.T, config: RenderConfig) => render.T;
