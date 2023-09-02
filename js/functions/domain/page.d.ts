import * as formR from "./form";
import * as responsibleR from "./responsible";
export * as resp from "./responsible";
export * as form from "./form";
export type T = {
    responsibles: responsibleR.T[];
    form: formR.T;
};
export declare function applyForm(t: T): T | {
    error: string;
};
export declare const switchTasks: (t: T, taskIds: string[]) => T;
export declare const withFormData: (t: T, name: string, resId: string) => T;
