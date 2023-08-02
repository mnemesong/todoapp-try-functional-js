import * as formR from "./form/index";
import * as responsibleR from "./responsible/index";
export * as resp from "./responsible/index";
export * as form from "./form/index";
export type T = {
    responsibles: responsibleR.T[];
    form: formR.T;
};
export declare function applyForm(t: T): T;
export declare const switchTasks: (t: T, taskIds: string[]) => T;
