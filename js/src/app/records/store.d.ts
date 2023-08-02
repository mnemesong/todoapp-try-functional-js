import * as records from "../records";
import * as events from "../events";
import * as abstracts from "../../abstracts";
export type T = {
    form: records.form.T;
    resps: records.resp.T[];
    tasks: records.task.T[];
};
export declare const evalApplyForm: (t: T, e: events.applyForm.T) => T;
export declare const evalSwitchTask: (t: T, e: events.switchTask.T) => T;
export declare const evalEvent: (t: T, e: abstracts.event.T<string, any>) => records.store.T;
