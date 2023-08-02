export type T = {
    id: string;
    name: string;
    isReady: boolean;
};
export declare const clone: (u: T) => T;
export declare const createNew: (id: string, name: string) => {
    id: string;
    name: string;
    isReady: boolean;
};
export declare const switchTask: (t: T) => T;
