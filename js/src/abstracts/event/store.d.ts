import * as rec from "./rec";
export type T<E extends string> = {
    $addNew: (e: rec.T<E, any>) => void;
    readAll: () => rec.T<E, any>[];
    $readFresh: () => rec.T<E, any>[];
};
