import * as src from "../functions"

export const config: src.appConfig.T = {
    formWidget: {
        formWidget: {
            template:  `
            <div id="form-cont">
                <input type="text" value="{{formName}}" id="form-input">
                <button type="button" id="submit-btn">Submit</button>
            </div>`,
            params: ['formName']
        },
        inputSelector: '#form-input',
        btnSelector: "#submit-btn"
    },
    formsRootSelector: '#form-host',
    respWidget: {
        resp: {
            template: `
            <ol id="resp-{{id}}">
                <li>{{name}}</li>
                <ol>{{tasks}}</ol>
            </ol>`,
            params: ['id', 'name', 'tasks']
        },
        taskWidget: {
            taskTemplate: {
                template: `
                <li id="task-{{id}}">{{content}}</li>`,
                params: ['id', 'content']
            },
            taskContentReadyTempalte: {
                template: `<b>{{name}}</b>`,
                params: ['name']
            },
            taskContentUnreadyTempalte: {
                template: `{{name}}`,
                params: ['name']
            },
            onclickSelector: {
                template: "#task-{{id}}",
                params: ['id']
            }
        }
    },
    respsRootSelector: "#resps-host"
}