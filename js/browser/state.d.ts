import * as src from "../functions";
import * as stateProto from "../state-protocol";
export declare const getOldPage: () => Readonly<src.domain.page.T>;
export declare const getNewPage: () => Readonly<src.domain.page.T>;
export declare const setNewPage: (p: src.domain.page.T) => void;
export declare const updatePage: () => void;
export declare const handleCommand: (c: stateProto.T, state: src.domain.page.T) => src.domain.page.T;
