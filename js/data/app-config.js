"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    formWidget: {
        formWidget: {
            template: "\n            <div id=\"form-cont\">\n                <input type=\"text\" value=\"{{formName}}\" id=\"form-input\">\n                <button type=\"button\" id=\"submit-btn\">Submit</button>\n            </div>",
            params: ['formName']
        },
        inputSelector: '#form-input',
        btnSelector: "#submit-btn"
    },
    formsRootSelector: '#form-host',
    respWidget: {
        resp: {
            template: "\n            <ol id=\"resp-{{id}}\">\n                <li>{{name}}</li>\n                <ol>{{tasks}}</ol>\n            </ol>",
            params: ['id', 'name', 'tasks']
        },
        taskWidget: {
            taskTemplate: {
                template: "\n                <li id=\"task-{{id}}\">{{content}}</li>",
                params: ['id', 'content']
            },
            taskContentReadyTempalte: {
                template: "<b>{{name}}</b>",
                params: ['name']
            },
            taskContentUnreadyTempalte: {
                template: "{{name}}",
                params: ['name']
            },
            onclickSelector: {
                template: "#task-{{id}}",
                params: ['id']
            }
        }
    },
    respsRootSelector: "#resps-host"
};
