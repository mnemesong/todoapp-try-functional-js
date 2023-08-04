export * as widgets from "./widgets";
import * as todo from "../todo-domain";
export type T = {
    resps: string;
    form: string;
};
export declare const prepare: (t: todo.T) => T;
