export declare const types: readonly ["change", "click"];
export type T<Command> = {
    selector: string;
    event: typeof types[number];
    commands: Command[];
};
