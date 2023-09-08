import * as formR from "./form"
import * as responsibleR from "./responsible"
import {v4 as uuid} from "uuid"
import * as stateProto from "../../state-protocol"
import * as queriableProto from "../../queriable-protocol"

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

export const handleCommand: queriableProto.queriable.T<
    {changeFormVal: string},
    'change-form-val',
    {c: stateProto.T, state: T},
    null,
    T
> = (param,  query) => {
    if(param.c.com === 'add-task') {
        const result = applyForm(param.state)
        if(result['error']) {
            console.log("Ошибка: " + result['error'])
            return {result: param.state}
        }
        return {result: (result as T)}
    }
    if(param.c.com === 'change-form') {
        if(query) {
            return {result: withFormData(
                param.state, 
                query.result.changeFormVal,
                param.state.form.responsibleId
            )}
        }
        return {query: 'change-form-val'}
    }
    if(param.c.com === 'switch-task-check') {
        return {result: switchTasks(param.state, [param.c.id])}
    }
}