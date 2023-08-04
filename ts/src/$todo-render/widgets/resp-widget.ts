import * as todo from "../../todo-domain"

export const render = (resp: todo.resp.T, tasks: string): string => `
<ol id="resp-${resp.id}">
    <li>${resp.name}</li>
    <ol>${tasks}</ol>
</ol>`