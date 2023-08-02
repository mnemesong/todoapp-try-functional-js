import * as formR from "./form";
import * as responsibleR from "./responsible";
export type T = {
    responsibles: responsibleR.T[];
    form: formR.T;
};
export declare function applyForm(t: T): T;
export declare const switchTasks: (t: T, taskIds: string[]) => T;
