import * as todo from "../../todo-domain";
import * as rec from "../../abstracts/record";
export type T = rec.T<todo.resp.task.T & {
    resId: string;
}>;
export declare const createNew: (name: string, resId: string) => {
    id: any;
    name: string;
    isReady: boolean;
    resId: string;
};
