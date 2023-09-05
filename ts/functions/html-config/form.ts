import * as template from "../../template-protocol"
import * as domain from "../domain/page"

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
