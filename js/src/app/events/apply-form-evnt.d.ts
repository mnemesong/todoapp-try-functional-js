import * as event from "../../abstracts/event";
export declare const e = "apply-form";
export type T = event.T<typeof e, null>;
export declare const create: () => T;
export declare const isValid: (some: event.T<string, any>) => boolean;
