import * as todo from "../../todo-domain"

export const render = (f: todo.form.T): string => {
    return `
    <div id="form-cont">
        <input type="text" value="${f.name}" id="form-input">
        <button type="button" id="submit-btn">Submit</button>
    </div>`
}