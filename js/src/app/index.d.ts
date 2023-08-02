import * as r from "./records";
import * as mapRender from "./app-to-render";
export * as records from "./records";
export * as appToRender from "./app-to-render";
export * as appToTodo from "./app-to-todo";
export type T = {
    form: r.form.T;
    resps: r.resp.T[];
    tasks: r.task.T[];
};
export declare const applyForm: (t: T) => T;
export declare const switchTask: (t: T, taskId: string) => T;
export declare const render: (t: T, config: mapRender.RenderConfig) => import("../render").T;
