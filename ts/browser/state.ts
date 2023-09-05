import * as data from "../data"
import * as src from "../functions"
import * as stateProto from "../state-protocol"

const state: {
    oldPage: src.domain.page.T,
    newPage: src.domain.page.T
} = {
    oldPage: {
        form: {
            responsibleId: "",
            name: ""
        },
        responsibles: []
    },
    newPage: data.page.init
}

export const getOldPage = (): Readonly<src.domain.page.T> => state.oldPage

export const getNewPage = (): Readonly<src.domain.page.T> => state.newPage

export const setNewPage = (p: src.domain.page.T) => {
    state.newPage = p
}

export const updatePage = () => {
    state.oldPage = state.newPage
}

export const handleCommand = (
    c: stateProto.T, 
    state: src.domain.page.T
): src.domain.page.T => {
    if(c.com === 'add-task') {
        const result = src.domain.page.applyForm(state)
        if(result['error']) {
            console.log("Ошибка: " + result['error'])
            return state
        }
        return (result as src.domain.page.T)
    }
    if(c.com === 'change-form') {
        const formInput = document.querySelector(data.appConfig.config.formWidget.inputSelector)
        if(formInput instanceof HTMLInputElement) {
            return src.domain.page
                .withFormData(state, formInput.value, state.form.responsibleId)
        }
        return state
    }
    if(c.com === 'switch-task-check') {
        return src.domain.page.switchTasks(state, [c.id])
    }
}