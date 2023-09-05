import * as template from "../../template-protocol"
import * as domain from "../domain/page"

export type T = {
    taskTemplate: template.T<'id' | 'content'>,
    taskContentReadyTempalte: template.T<'name'>,
    taskContentUnreadyTempalte: template.T<'name'>,
    onclickSelector: template.T<'id'>
}

export const renderContent = (
    val: domain.resp.task.T,
    widget: T
) => template.render(widget.taskTemplate, {
    id: val.id,
    content: (val.isReady)
        ? template.render(
            widget.taskContentReadyTempalte, 
            {name: val.name})
        : template.render(
            widget.taskContentUnreadyTempalte, 
            {name: val.name})
})

export const renderSelector = (
    selector: template.T<'id'>, 
    val: domain.resp.task.T,
): string => template.render(selector, {'id': val.id})