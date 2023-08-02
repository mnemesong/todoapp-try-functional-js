import * as event from "../../abstracts/event/rec"

export const e = 'switch-task'

export type T = event.T<typeof e, {id: string}>

export const create = (id: string):T => [e, {id: id}]

export const isValid = (some: event.T<string, any>) => some[0] === e