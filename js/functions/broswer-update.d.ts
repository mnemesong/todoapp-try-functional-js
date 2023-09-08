import * as domain from "./domain";
import * as browserProto from "../browser-protocol";
import * as htmlConfig from "./html-config";
import * as command from "./commands";
export type T = {
    rerenderCommands: browserProto.rerender.T[];
    setEventCommands: browserProto.setEvent.T<command.T>[];
};
export declare const addCommandsAndEvents: (t: T, commands: browserProto.rerender.T[], events: browserProto.setEvent.T<command.T>[]) => T;
export declare const updateBrowser: (state1: domain.page.T, state2: domain.page.T, appConfig: htmlConfig.page.T) => T;
