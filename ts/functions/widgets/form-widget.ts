import * as template from "../template/template"
import * as domain from "../domain/page"
import * as taskWidget from "./task-widget"

export type T = {
    formWidget: template.T<'formName'>,
    inputSelector: string,
    btnSelector: string,
}

export const renderContent = (
    val: domain.form.T,
    widget: T
) => template.render(widget.formWidget, {
    formName: val.name,
})
