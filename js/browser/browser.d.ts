import * as browserProto from "../browser-protocol";
import * as stateProto from "../state-protocol";
export declare const handleSetEventCommand: (com: browserProto.setEvent.T<stateProto.T>, rerender: () => void) => void;
export declare const handleRerenderCommand: (com: browserProto.rerender.T) => void;
