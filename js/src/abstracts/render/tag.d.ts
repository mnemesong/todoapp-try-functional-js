export type T = [string, Record<string, string>, T[]];
export declare const unclosedTags: string[];
export declare const render: (t: T) => string;
