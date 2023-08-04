import * as src from "../../../src"
import { describe, it } from "mocha"
import * as assert from "assert"

describe("task.test", () =>
{
    describe("test switchTask", () =>
    {
        it("test 1", () =>
        {
            const task: src.todoDomain.resp.task.T = ({
                id: "sadasd",
                isReady: true,
                name: "Sense Chi"
            })
            const nominal: src.todoDomain.resp.task.T = ({
                id: "sadasd",
                isReady: false,
                name: "Sense Chi"
            })
            assert.deepStrictEqual(src.todoDomain.resp.task.switchTask(task), nominal)
        })
    })
})