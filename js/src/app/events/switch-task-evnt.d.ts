import * as event from "../../abstracts/event/rec";
export declare const e = "switch-task";
export type T = event.T<typeof e, {
    id: string;
}>;
export declare const create: (id: string) => T;
export declare const isValid: (some: event.T<string, any>) => boolean;
