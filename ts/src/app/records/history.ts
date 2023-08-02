import * as events from "../events"
import * as abstr from "../../abstracts"

const tuple = <T extends string[]>(...args: T) => args;

export const eventNames = tuple(events.applyForm.e, events.switchTask.e)

export type Event = events.applyForm.T | events.switchTask.T

export type T = {
    events: abstr.event.rec.T<typeof eventNames[number], any>[],
    lastEvent: number,
}

export const withIncrEventIndex = (t: T): T => ({
    events: t.events,
    lastEvent: t.lastEvent + 1,
})

export const getFirst = (t: T) => t.events[t.lastEvent]

export const addEvent = (t: T, e: Event): T => ({
    events: t.events.concat([e]),
    lastEvent: t.lastEvent,
})