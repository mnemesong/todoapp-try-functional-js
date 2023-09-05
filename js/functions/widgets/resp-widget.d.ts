import * as template from "../../template-engine";
import * as domain from "../domain/page";
import * as taskWidget from "./task-widget";
export type T = {
    resp: template.T<'id' | 'name' | 'tasks'>;
    taskWidget: taskWidget.T;
};
export declare const renderContent: (val: domain.resp.T, widget: T) => string;
export declare const renderSelector: (selector: template.T<'id'>, val: domain.resp.T) => string;
