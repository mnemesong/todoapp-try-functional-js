import * as template from "../../template-protocol";
import * as domain from "../domain/page";
export type T = {
    formWidget: template.T<'formName'>;
    inputSelector: string;
    btnSelector: string;
};
export declare const renderContent: (val: domain.form.T, widget: T) => string;
