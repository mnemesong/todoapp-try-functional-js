import * as app from "../app"
import * as todo from "../todo-domain"

const state = {
    s: ({
        resps: [
            {id: "34e96a3e-dfad-412c-93a2-125f8697750b", name: "Mary"},
            {id: "6d4c7b04-bcce-4309-804c-b5337a5f760a", name: "John"},
        ],
        tasks: [
            {
                id: "eccdcf42-2521-4e7d-8991-41ea50274c51",
                resId: "34e96a3e-dfad-412c-93a2-125f8697750b",
                name: "Kiss the cat",
                isReady: false,
            },
            {
                id: "ef43d0b0-5226-441f-96f9-fa574caa5b9f",
                resId: "34e96a3e-dfad-412c-93a2-125f8697750b",
                name: "Buy the milk",
                isReady: true,
            },
            {
                id: "ef176caf-f06c-4535-bf55-f1891dac00a0",
                resId: "6d4c7b04-bcce-4309-804c-b5337a5f760a",
                name: "Found the home",
                isReady: false,
            },
        ],
        form: {
            name: "",
            responsibleId: "6d4c7b04-bcce-4309-804c-b5337a5f760a"
        }
    })
}

const renderConfig: app.appToRender.RenderConfig = {
    taskRender: (m) => `
    <li id="task-${m.id}">${m.isReady ? `<b>${m.name}</b>` : m.name}</li>`,
    respRender: (r, t) => `
    <ol id="resp-${r.id}">
        <li>${r.name}</li>
        <ol>${t}</ol>
    </ol>`,
    formRender: (f) => `
    <div id="form-cont">
        <input type="text" value="${f.name}" id="form-input">
        <button type="button" id="submit-btn">Submit</button>
    </div>`
}

export const render = () => {
    const renderResult = app.appToRender.toRender(state.s, renderConfig)
    document.querySelector('#resps-host').innerHTML = renderResult.resps
    document.querySelector('#form-host').innerHTML = renderResult.form
    state.s.tasks.forEach(t => {
        try {
            (document.querySelector('#task-' + t.id) as any).onclick = () => {
                state.s = app.appToTodo.fromTodo(
                    todo.switchTasks(app.appToTodo.toTodo(state.s), [t.id])
                )
                render()
            }
        } catch (e) {}
    })
    try{
        (document.querySelector("#submit-btn") as any).onclick = () => {
                const formVal = (document.getElementById('form-input') as any).value
                if (!!formVal) {
                    state.s.form.name = formVal
                }
                state.s = app.appToTodo.fromTodo(
                    todo.applyForm(app.appToTodo.toTodo(state.s))
                )
                render()
        }
    } catch (e) {}
}

render()
