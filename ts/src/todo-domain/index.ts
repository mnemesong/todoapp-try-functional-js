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

export const withFormData = (t: T, name: string, resId: string): T => ({
    responsibles: t.responsibles,
    form: {name: name, responsibleId: resId}
})

export const init = (): T => ({
    responsibles: [
        {
            id: "34e96a3e-dfad-412c-93a2-125f8697750b", 
            name: "Mary",
            tasks: [
                {
                    id: "eccdcf42-2521-4e7d-8991-41ea50274c51",
                    name: "Kiss the cat",
                    isReady: false,
                },
                {
                    id: "ef43d0b0-5226-441f-96f9-fa574caa5b9f",
                    name: "Buy the milk",
                    isReady: true,
                },
            ]
        },
        {
            id: "6d4c7b04-bcce-4309-804c-b5337a5f760a", 
            name: "John",
            tasks: [
                {
                    id: "ef176caf-f06c-4535-bf55-f1891dac00a0",
                    name: "Found the home",
                    isReady: false,
                },
            ]
        },
    ],
    form: {
        name: "",
        responsibleId: "6d4c7b04-bcce-4309-804c-b5337a5f760a"
    }
})