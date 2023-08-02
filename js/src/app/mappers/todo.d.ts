import * as todo from "../../todo";
import * as records from "../records";
export declare const toTodo: (t: records.store.T) => todo.app.T;
export declare const fromTodo: (t: todo.app.T) => records.store.T;
export declare const inContextOfTodo: (t: records.store.T, f: (app: todo.app.T) => todo.app.T) => records.store.T;
