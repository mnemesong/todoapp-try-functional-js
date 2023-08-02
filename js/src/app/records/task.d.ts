import * as todo from "../../todo";
import * as rec from "../../abstracts/table/record";
export type T = rec.T<todo.task.T & {
    resId: string;
}>;
export declare const createNew: (name: string, resId: string) => {
    id: any;
    name: string;
    isReady: boolean;
    resId: string;
};
