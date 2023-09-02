import * as command from "../commands";
export declare const types: readonly ["change", "click"];
export type T = {
    selector: string;
    event: typeof types[number];
    commands: command.T[];
};
