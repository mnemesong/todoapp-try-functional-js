import * as formR from "./form"
import * as responsibleR from "./responsible"
import {v4 as uuid} from "uuid"

export * as resp from "./responsible"
export * as form from "./form"

export type T = {
    responsibles: responsibleR.T[],
    form: formR.T,
}

export function applyForm(t: T): T|{error: string} {
    if(!t.responsibles.map(el => el.id).includes(t.form.responsibleId)) {
        return {error: "form contains invalid responsible ID"}
    }
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

export const withFormData = (t: T, name: string, resId: string): T => ({
    responsibles: t.responsibles,
    form: {name: name, responsibleId: resId}
})