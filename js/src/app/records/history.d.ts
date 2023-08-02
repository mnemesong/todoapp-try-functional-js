import * as events from "../events";
import * as abstr from "../../abstracts";
export declare const eventNames: ["apply-form", "switch-task"];
export type Event = events.applyForm.T | events.switchTask.T;
export type T = {
    events: abstr.event.T<typeof eventNames[number], any>[];
    lastEvent: number;
};
export declare const withIncrEventIndex: (t: T) => T;
export declare const getFirst: (t: T) => abstr.event.T<"apply-form" | "switch-task", any>;
export declare const addEvent: (t: T, e: Event) => T;
