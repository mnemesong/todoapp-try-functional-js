import * as history from "./history"
import * as store from "./store"
import * as abstr from "../../abstracts"
import * as mappers from "../mappers"

export type T = {
    store: store.T,
    history: history.T,
}

export const updateEventHistory = (t: T): T => ({
    store: store.evalEvent(t.store, history.getFirst(t.history)),
    history: history.withIncrEventIndex(t.history),
})

export const init = (): T => ({
    store: {
        resps: [
            {id: "34e96a3e-dfad-412c-93a2-125f8697750b", name: "Mary"},
            {id: "6d4c7b04-bcce-4309-804c-b5337a5f760a", name: "John"},
        ],
        tasks: [
            {
                id: "eccdcf42-2521-4e7d-8991-41ea50274c51",
                resId: "34e96a3e-dfad-412c-93a2-125f8697750b",
                name: "Kiss the cat",
                isReady: false,
            },
            {
                id: "ef43d0b0-5226-441f-96f9-fa574caa5b9f",
                resId: "34e96a3e-dfad-412c-93a2-125f8697750b",
                name: "Buy the milk",
                isReady: true,
            },
            {
                id: "ef176caf-f06c-4535-bf55-f1891dac00a0",
                resId: "6d4c7b04-bcce-4309-804c-b5337a5f760a",
                name: "Found the home",
                isReady: false,
            },
        ],
        form: {
            name: "",
            responsibleId: "6d4c7b04-bcce-4309-804c-b5337a5f760a"
        }
    },
    history: {
        events: [],
        lastEvent: 0,
    }
})