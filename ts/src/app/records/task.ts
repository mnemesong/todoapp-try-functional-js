import * as todo from "../../todo-domain"
import * as rec from "../../abstracts/record"
import {v4 as uuid} from 'uuid'

export type T = rec.T<todo.resp.task.T & {resId: string}>

export const createNew = (name: string, resId: string) => ({
    id: uuid(),
    name: name,
    isReady: false,
    resId: resId
})