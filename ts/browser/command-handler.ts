import * as data from "../data"
import * as src from "../functions"

export const handleCommand = (
    c: src.commands.T, 
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