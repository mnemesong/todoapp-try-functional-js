import * as browserProto from "../browser-protocol";
import * as src from "../functions";
export declare const handleSetEventCommand: (com: browserProto.setEvent.T<src.commands.T>, rerender: () => void) => void;
export declare const handleRerenderCommand: (com: browserProto.rerender.T) => void;
