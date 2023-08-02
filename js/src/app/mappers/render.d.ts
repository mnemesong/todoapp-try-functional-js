import * as records from "../records";
import * as render from "../../render";
export type RenderConfig = {
    taskRender: (m: records.task.T) => string;
    respRender: (m: records.resp.T, tasks: string) => string;
    formRender: (m: records.form.T) => string;
};
export declare const toRender: (t: records.store.T, config: RenderConfig) => render.state.T;
