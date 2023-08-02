import * as todo from "../../todo-domain";
import * as abstr from "../../abstracts";
export type T = abstr.record.T<Omit<todo.resp.T, 'tasks'>>;
export declare const createNew: (name: string) => T;
export declare const toTodoResponsible: (t: T, tasks?: todo.resp.task.T[]) => todo.resp.T;
