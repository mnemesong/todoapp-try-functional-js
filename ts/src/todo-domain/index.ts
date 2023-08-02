import assert from "assert"
import * as formR from "./form/index"
import * as responsibleR from "./responsible/index"
import {v4 as uuid} from "uuid"

export * as resp from "./responsible/index"
export * as form from "./form/index"

export type T = {
    responsibles: responsibleR.T[],
    form: formR.T,
}

export function applyForm(t: T): T {
    assert.ok(t.responsibles.map(el => el.id).includes(t.form.responsibleId))
    const newRess = t.responsibles.map(el => (el.id === t.form.responsibleId)
        ? responsibleR.withNewTask(el, {
            id: uuid(), 
            name: t.form.name,
            isReady: false
        })
        : el)
    return {
        responsibles: newRess, 
        form: formR.construct(t.responsibles[0].id),
    }
}

export const switchTasks = (t: T, taskIds: string[]): T => {
    const newRess = t.responsibles.map(
        el => responsibleR.switchManyTasks(el, taskIds)
    )
    return {
        responsibles: newRess,
        form: t.form,
    }
}