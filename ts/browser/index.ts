import * as src from "../functions"
import * as data from "../data"
import * as commandHandler from "./command-handler"

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

const rerender = () => {
    const updates = src.browserUpdate
        .updateBrowser(state.oldPage, state.newPage, data.appConfig.config)
    updates.rerenderCommands.forEach(c => handleRerenderCommand(c))
    updates.setEventCommands.forEach(c => handleSetEventCommand(c))
    state.oldPage = state.newPage
}

const handleSetEventCommand = (
    com: src.browserCommands.setEvent.T
): void => {
    try{
        const el = document.querySelector(com.selector) as HTMLElement
        const event = () => com.commands.forEach(c => {
            const oldState = state.newPage
            state.newPage = commandHandler.handleCommand(c, state.newPage)
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

const handleRerenderCommand = (
    com: src.browserCommands.rerender.T
): void => {
    document.querySelector(com.selector).innerHTML = com.content
}

rerender()