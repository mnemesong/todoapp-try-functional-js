import assert from "assert"
import * as formR from "./form"
import * as responsibleR from "./responsible"
import {v4 as uuid} from "uuid"

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
        el => taskIds.includes(el.id)
            ? responsibleR.switchManyTasks(el, taskIds)
            : el
    )
    return {
        responsibles: newRess,
        form: t.form,
    }
}