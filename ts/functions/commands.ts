import * as domain from "./domain"
import * as queriableProto from "../queriable-protocol"

export type T = {com: 'add-task'}
    | {com: 'switch-task-check', id: string}
    | {com: 'change-form'}

export const handle: queriableProto.queriable.T<
    {changeFormVal: string},
    'change-form-val',
    {c: T, state: domain.page.T},
    null,
    domain.page.T
> = (param,  query) => {
    if(param.c.com === 'add-task') {
        const result = domain.page.applyForm(param.state)
        if(result['error']) {
            console.log("Ошибка: " + result['error'])
            return {result: param.state}
        }
        return {result: (result as domain.page.T)}
    }
    if(param.c.com === 'change-form') {
        if(query) {
            return {result: domain.page.withFormData(
                param.state, 
                query.result.changeFormVal,
                param.state.form.responsibleId
            )}
        }
        return {query: 'change-form-val'}
    }
    if(param.c.com === 'switch-task-check') {
        return {result: domain.page.switchTasks(param.state, [param.c.id])}
    }
}