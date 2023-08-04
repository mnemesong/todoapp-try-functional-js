import * as todo from "../../todo-domain"

export const render = (task: todo.resp.task.T): string => {
    return `
    <li id="task-${task.id}">${task.isReady ? `<b>${task.name}</b>` : task.name}</li>`
}