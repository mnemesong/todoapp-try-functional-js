import * as src from "../../src"
import { describe, it } from "mocha"
import * as assert from "assert"

describe("todo-domain.test", () =>
{
    describe("test switchTasks", () =>
    {
        it("test 1", () =>
        {
            const todo: src.todo.T = ({
                responsibles: [{
                    id: "s9dasjd0",
                    name: "Willey",
                    tasks: [{
                        id: "sadasd",
                        isReady: true,
                        name: "Sense Chi"
                    }]
                }],
                form: {
                    name: "",
                    responsibleId: ""
                }
            })
            const nominal: src.todo.T = ({
                responsibles: [{
                    id: "s9dasjd0",
                    name: "Willey",
                    tasks: [{
                        id: "sadasd",
                        isReady: false,
                        name: "Sense Chi"
                    }]
                }],
                form: {
                    name: "",
                    responsibleId: ""
                }
            })
            assert.deepStrictEqual(src.todo.switchTasks(todo, ["sadasd"]), nominal)
        })
    })
})