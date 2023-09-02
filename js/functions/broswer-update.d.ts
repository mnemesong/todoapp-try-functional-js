import * as domain from "./domain";
import * as browser from "./browser-commands";
import * as appConfig from "./app-config";
export type T = {
    rerenderCommands: browser.rerender.T[];
    setEventCommands: browser.setEvent.T[];
};
export declare const addCommandsAndEvents: (t: T, commands: browser.rerender.T[], events: browser.setEvent.T[]) => T;
export declare const updateBrowser: (state1: domain.page.T, state2: domain.page.T, appConfig: appConfig.T) => T;
