import * as taskR from "./task";
export type T = {
    id: string;
    name: string;
    tasks: taskR.T[];
};
export declare const clone: (u: T) => {
    id: string;
    name: string;
    tasks: taskR.T[];
};
export declare const withNewTask: (t: T, task: taskR.T) => {
    id: string;
    name: string;
    tasks: taskR.T[];
};
export declare const switchTasks: (t: T, taskId: string) => {
    id: string;
    name: string;
    tasks: taskR.T[];
};
export declare const switchManyTasks: (t: T, taskIds: string[]) => {
    id: string;
    name: string;
    tasks: taskR.T[];
};
