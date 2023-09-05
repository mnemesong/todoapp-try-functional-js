import * as template from "../../template-protocol"
import * as domain from "../domain/page"
import * as taskWidget from "./task-widget"

export type T = {
    resp: template.T<'id'|'name'|'tasks'>,
    taskWidget: taskWidget.T
}

export const renderContent = (
    val: domain.resp.T,
    widget: T
): string =>  template.render(widget.resp, {
    id: val.id,
    name: val.name,
    tasks: val.tasks
        .map(t => taskWidget.renderContent(t, widget.taskWidget))
        .join('')
})

export const renderSelector = (
    selector: template.T<'id'>, 
    val: domain.resp.T,
): string => template.render(selector, {id: val.id})