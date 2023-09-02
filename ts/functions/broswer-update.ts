import * as domain from "./domain"
import * as browser from "./browser-commands"
import * as appConfig from "./app-config"
import * as widgets from "./widgets"
import * as deepEqual from "deep-equal"
import * as commands from "./commands"
import * as template from "./template"

export type T = {
    rerenderCommands: browser.rerender.T[],
    setEventCommands: browser.setEvent.T[]
}

export const addCommandsAndEvents = (
    t: T, 
    commands: browser.rerender.T[],
    events: browser.setEvent.T[]
): T => ({
    rerenderCommands: t.rerenderCommands.concat(commands),
    setEventCommands: t.setEventCommands.concat(events),
})

export const updateBrowser = (
    state1: domain.page.T, 
    state2: domain.page.T,
    appConfig: appConfig.T
): T => {
    let result: T = {rerenderCommands: [], setEventCommands: []}
    if(!deepEqual.default(state1.form, state2.form)) {
        result = addCommandsAndEvents(result, [{
            command: 'innerHtml',
            selector: appConfig.formsRootSelector,
            content: widgets.form.renderContent(state2.form, appConfig.formWidget)
        }], [
            {
                selector: appConfig.formWidget.btnSelector,
                event: 'click',
                commands: [
                    { com: "change-form"},
                    { com: "add-task"},
                ]
            },
            {
                selector: appConfig.formWidget.inputSelector,
                event: "change",
                commands : [{ com: "change-form"},]
            }
        ])
    }
    if(!deepEqual.default(state1.responsibles, state2.responsibles)) {
        result = addCommandsAndEvents(result, [{
            command: "innerHtml",
            selector: appConfig.respsRootSelector,
            content: state2.responsibles.map(r => widgets.resp
                .renderContent(r, appConfig.respWidget))
                .join('')
        }], state2.responsibles.reduce(
            (acc: {id: string, sel: string}[], respEl) => {
                return acc.concat(respEl.tasks.map(t => ({
                    id: t.id, 
                    sel: template
                        .template.render(
                            appConfig.respWidget.taskWidget.onclickSelector, {
                            id: t.id
                        })}))
                )
            }, 
            []
        ).map(el => ({
            selector: el.sel,
            event: 'click',
            commands: [{com: 'switch-task-check', id: el.id}]
        })))
    }
    return result
}