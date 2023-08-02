export type T = {
    name: string;
    responsibleId: string;
};
export declare const clone: (t: T) => T;
export declare const construct: (defResId: string) => T;
