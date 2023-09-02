export declare const commands: readonly ["innerHtml"];
export type T = {
    command: typeof commands[number];
    selector: string;
    content: string;
};
