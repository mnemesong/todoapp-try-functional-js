import * as domain from "./domain"
import * as browserProto from "../browser-protocol"
import * as htmlConfig from "./html-config"
import * as deepEqual from "deep-equal"
import * as templateProto from "../template-protocol"
import * as stateProto from "../state-protocol"

export type T = {
    rerenderCommands: browserProto.rerender.T[],
    setEventCommands: browserProto.setEvent.T<stateProto.T>[]
}

export const addCommandsAndEvents = (
    t: T, 
    commands: browserProto.rerender.T[],
    events: browserProto.setEvent.T<stateProto.T>[]
): T => ({
    rerenderCommands: t.rerenderCommands.concat(commands),
    setEventCommands: t.setEventCommands.concat(events),
})

export const updateBrowser = (
    state1: domain.page.T, 
    state2: domain.page.T,
    appConfig: htmlConfig.page.T
): T => {
    let result: T = {rerenderCommands: [], setEventCommands: []}
    if(!deepEqual.default(state1.form, state2.form)) {
        result = addCommandsAndEvents(result, [{
            command: 'innerHtml',
            selector: appConfig.formsRootSelector,
            content: htmlConfig.form.renderContent(state2.form, appConfig.formWidget)
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
            content: state2.responsibles.map(r => htmlConfig.resp
                .renderContent(r, appConfig.respWidget))
                .join('')
        }], state2.responsibles.reduce(
            (acc: {id: string, sel: string}[], respEl) => {
                return acc.concat(respEl.tasks.map(t => ({
                    id: t.id, 
                    sel: templateProto.render(
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