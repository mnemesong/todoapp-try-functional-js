import * as src from "../../../src"
import { describe, it } from "mocha"
import * as assert from "assert"

describe("todo-domain.resp.test", () =>
{
    describe("test switchManyTasks", () =>
    {
        it("test 1", () =>
        {
            const resp: src.todoDomain.resp.T = ({
                id: "s9dasjd0",
                name: "Willey",
                tasks: [{
                    id: "sadasd",
                    isReady: true,
                    name: "Sense Chi"
                }]
            })
            const nominal: src.todoDomain.resp.T = ({
                id: "s9dasjd0",
                name: "Willey",
                tasks: [{
                    id: "sadasd",
                    isReady: false,
                    name: "Sense Chi"
                }]
            })
            assert.deepStrictEqual(
                src.todoDomain.resp.switchManyTasks(resp, ["sadasd"]), 
                nominal
            )
        })
    })
})