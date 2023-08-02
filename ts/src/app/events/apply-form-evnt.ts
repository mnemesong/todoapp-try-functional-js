import * as event from "../../abstracts/event/rec"

export const e = 'apply-form'

export type T = event.T<typeof e, null>

export const create = (): T => [e, null]

export const isValid = (some: event.T<string, any>) => some[0] === e