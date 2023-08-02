import * as abstr from "../abstracts/index"
import * as todo from "../todo-domain/index"
import * as infr from "../infrastructure/index"
import {v4 as uuid} from "uuid"

export type T = {
    form: todo.form.T,
    responsibles: infr.recordRespons.T[],
    tasks: infr.recordTask.T[],
    events: abstr.eventRec.T<infr.eventName.T, any>[],
    lastEvent: number
}

export const initData: T  = ({
    form: {name: '', responsibleId: '3d009640-c832-4075-899c-f329363afa6b'},
    responsibles: [
        {id: '3d009640-c832-4075-899c-f329363afa6b', name: "Mary"},
        {id: 'c10e3a0d-53ce-4623-81cd-7a48b2b35407', name: "Jack"}
    ],
    tasks: [
        {
            id: '90856de8-2b72-418e-858d-c11ec40db9bc', 
            name: "Kiss the cat",
            resId: '3d009640-c832-4075-899c-f329363afa6b',
            isReady: false
        },
        {
            id: '7355fc9b-949f-479e-918c-21b404114763', 
            name: "Buy the milk",
            resId: '3d009640-c832-4075-899c-f329363afa6b',
            isReady: true
        },
        {
            id: '16d6b954-e217-4686-be71-bcbeb91237c4', 
            name: "Look the wife",
            resId: 'c10e3a0d-53ce-4623-81cd-7a48b2b35407',
            isReady: false
        },
    ],
    events: [],
    lastEvent: 0
})

const atom: T = initData

export const events: abstr.eventStor.T<infr.eventName.T> = ({
    $addNew: (e) => atom.events.push(e),
    readAll: () => atom.events,
    $readFresh: () => {
        const subset = atom.events.filter((el, i) => i >= atom.lastEvent)
        atom.lastEvent = atom.events.length
        return subset
    },
})

export const form: abstr.mutStor.T<infr.mutForm.T> = ({
    $update: (f) => {
        atom.form = f(atom.form)
    },
    read: () => atom.form
})

export const 

