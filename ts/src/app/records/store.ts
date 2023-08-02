import * as records from "../records"
import * as events from "../events"
import * as mappers from "../mappers"
import * as todo from "../../todo"
import * as abstracts from "../../abstracts"

export type T = {
    form: records.form.T,
    resps: records.resp.T[],
    tasks: records.task.T[],
}

export const evalApplyForm = (t: T, e: events.applyForm.T): T => mappers
    .todo.inContextOfTodo(t, todo.app.applyForm)

export const evalSwitchTask = (t: T, e: events.switchTask.T): T => mappers
    .todo.inContextOfTodo(t, (app) => todo.app.switchTasks(app, [e[1].id]))

export const evalEvent = (t: T, e: abstracts.event.rec.T<string, any>) => {
    if(events.applyForm.isValid(e)) {
        return evalApplyForm(t, e as events.applyForm.T)
    } else if(events.switchTask.isValid(e)) {
        return evalSwitchTask(t, e as events.switchTask.T)
    }
    throw "Invalid event: " + e[0]
}
