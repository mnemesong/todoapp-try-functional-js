import * as domain from "./domain";
import * as browserProto from "../browser-protocol";
import * as htmlConfig from "./html-config";
import * as stateProto from "../state-protocol";
export type T = {
    rerenderCommands: browserProto.rerender.T[];
    setEventCommands: browserProto.setEvent.T<stateProto.T>[];
};
export declare const addCommandsAndEvents: (t: T, commands: browserProto.rerender.T[], events: browserProto.setEvent.T<stateProto.T>[]) => T;
export declare const updateBrowser: (state1: domain.page.T, state2: domain.page.T, appConfig: htmlConfig.page.T) => T;
