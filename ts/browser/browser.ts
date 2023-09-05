import * as stateEngine from "./state"
import * as browserProto from "../browser-protocol"
import * as stateProto from "../state-protocol"

export const handleSetEventCommand = (
    com:browserProto.setEvent.T<stateProto.T>,
    rerender: () => void
): void => {
    try{
        const el = document.querySelector(com.selector) as HTMLElement
        const event = () => com.commands.forEach(c => {
            stateEngine.setNewPage(
                stateEngine.handleCommand(c, stateEngine.getNewPage()))
            rerender()
        })
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