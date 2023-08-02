import * as history from "./history"
import * as store from "./store"

export type T = {
    store: store.T,
    history: history.T,
}

export const updateEventHistory = (t: T): T => ({
    store: store.evalEvent(t.store, history.getFirst(t.history)),
    history: history.withIncrEventIndex(t.history),
})