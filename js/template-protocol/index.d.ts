export type T<M extends string> = {
    template: string;
    params: M[];
};
export declare function render<M extends string>(template: T<M>, insertions: Record<M, string>): string;
