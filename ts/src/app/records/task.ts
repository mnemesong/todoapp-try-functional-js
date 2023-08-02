import * as todo from "../../todo"
import * as rec from "../../abstracts/table/record"
import {v4 as uuid} from 'uuid'

export type T = rec.T<todo.task.T & {resId: string}>

export const createNew = (name: string, resId: string) => ({
    id: uuid(),
    name: name,
    isReady: false,
    resId: resId
})