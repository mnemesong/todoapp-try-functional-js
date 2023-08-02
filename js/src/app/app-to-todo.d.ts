import * as todo from "../todo-domain";
import * as app from ".";
export declare const toTodo: (t: app.T) => todo.T;
export declare const fromTodo: (t: todo.T) => app.T;
export declare const inContextOfTodo: (t: app.T, f: (app: todo.T) => todo.T) => app.T;
