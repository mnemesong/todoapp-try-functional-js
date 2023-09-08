import * as domain from "./domain";
import * as queriableProto from "../queriable-protocol";
export type T = {
    com: 'add-task';
} | {
    com: 'switch-task-check';
    id: string;
} | {
    com: 'change-form';
};
export declare const handle: queriableProto.queriable.T<{
    changeFormVal: string;
}, 'change-form-val', {
    c: T;
    state: domain.page.T;
}, null, domain.page.T>;
