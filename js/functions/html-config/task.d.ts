import * as template from "../../template-protocol";
import * as domain from "../domain/page";
export type T = {
    taskTemplate: template.T<'id' | 'content'>;
    taskContentReadyTempalte: template.T<'name'>;
    taskContentUnreadyTempalte: template.T<'name'>;
    onclickSelector: template.T<'id'>;
};
export declare const renderContent: (val: domain.resp.task.T, widget: T) => string;
export declare const renderSelector: (selector: template.T<'id'>, val: domain.resp.task.T) => string;
