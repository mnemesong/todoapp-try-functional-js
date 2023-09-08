import * as stateEngine from "./state"
import * as browserProto from "../browser-protocol"
import * as stateProto from "../state-protocol"
import * as src from "../functions"
import * as queriableProto from "../queriable-protocol"
import * as data from "../data"

const browserFormValHandler: queriableProto.queryHabdler.T<
    {changeFormVal: string}, 
    'change-form-val',
    string
> = (queryConfig: 'change-form-val') => {
    const formInput = document
        .querySelector(data.appConfig.config.formWidget.inputSelector)
    if(!(formInput instanceof HTMLInputElement)) {
        return {exception: "can not found formInput as HTMLInputElement"}
    }
    return {result: {changeFormVal: formInput.value}, query: 'change-form-val'}
}

export const handleSetEventCommand = (
    com:browserProto.setEvent.T<stateProto.T>,
    rerender: () => void
): void => {
    try{
        const el = document.querySelector(com.selector) as HTMLElement
        const event = () => {
            com.commands.forEach(c => {
                const result = queriableProto.queriable.call(
                    src.domain.page.handleCommand, {
                        c: c,
                        state: stateEngine.getNewPage()
                    }, browserFormValHandler
                )
                if(result['exception']) {
                    throw new Error(result['exception'])
                }
                stateEngine.setNewPage((result as {result: src.domain.page.T}).result)
            })
            rerender()
        }
        if(com.event === 'click') { 
            el.onclick = event 
            console.log("set event onclick on " + com.selector)
        }
        if(com.event === 'change') { 
            el.onchange = event 
            console.log("set event onchange on " + com.selector)
        }
    } catch (e) {
        throw new Error("Error at executing command: " + JSON.stringify(com) 
            + ": " + e)
    }
}

export const handleRerenderCommand = (
    com: browserProto.rerender.T
): void => {
    document.querySelector(com.selector).innerHTML = com.content
}