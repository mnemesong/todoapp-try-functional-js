import * as formR from "./form";
import * as responsibleR from "./responsible";
import * as stateProto from "../../state-protocol";
import * as queriableProto from "../../queriable-protocol";
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
export declare const handleCommand: queriableProto.queriable.T<{
    changeFormVal: string;
}, 'change-form-val', {
    c: stateProto.T;
    state: T;
}, null, T>;
