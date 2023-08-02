import * as history from "./history";
import * as store from "./store";
export type T = {
    store: store.T;
    history: history.T;
};
export declare const updateEventHistory: (t: T) => T;
export declare const init: () => T;
