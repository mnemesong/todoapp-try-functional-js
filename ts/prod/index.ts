import * as src from "../src"

src.todoSaver.$saveTodo(src.todoDomain.init())

export const render = () => {
    const renderResult = src.todoRender.prepare(src.todoSaver.$getTodo())
    document.querySelector('#resps-host').innerHTML = renderResult.resps
    document.querySelector('#form-host').innerHTML = renderResult.form
    src.todoSaver.$getTodo().responsibles.forEach(r => {
        r.tasks.forEach(t => {
            try {
                (document.querySelector('#task-' + t.id) as any).onclick = () => {
                    src.todoSaver.$saveTodo(
                        src.todoDomain.switchTasks(
                            src.todoSaver.$getTodo(), 
                            [t.id]
                        )
                    )
                    render()
                }
            } catch (e) {}
        })
    })
    try{
        (document.querySelector("#submit-btn") as any).onclick = () => {
                const todoVal1 =  src.todoSaver.$getTodo()
                const formVal = (document.getElementById('form-input') as any).value
                if (!!formVal) {
                    const resId = src.todoSaver.$getTodo().form.responsibleId
                    src.todoSaver.$saveTodo(src.todoDomain.withFormData(
                        src.todoSaver.$getTodo(), 
                        formVal, 
                        resId
                    ))
                }
                const todoVal2 = (!!formVal)
                    ? src.todoDomain.withFormData(
                        src.todoSaver.$getTodo(), 
                        formVal, 
                        todoVal1.form.responsibleId
                    )
                    : todoVal1
                const todoVal3 = src.todoDomain.applyForm(todoVal2)
                src.todoSaver.$saveTodo(todoVal3)
                render()
        }
    } catch (e) {}
}

render()