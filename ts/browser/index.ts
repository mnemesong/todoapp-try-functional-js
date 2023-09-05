import * as src from "../functions"
import * as data from "../data"
import * as stateEngine from "./state"
import * as browserEngine from "./browser"

const rerender = () => {
    const updates = src.browserUpdate.updateBrowser(
        stateEngine.getOldPage(), 
        stateEngine.getNewPage(), 
        data.appConfig.config
    )
    updates.rerenderCommands
        .forEach(c => browserEngine.handleRerenderCommand(c))
    updates.setEventCommands
        .forEach(c => browserEngine.handleSetEventCommand(c, rerender))
    stateEngine.updatePage()
}

rerender()