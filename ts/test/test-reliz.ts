import * as src from "../src"
import { describe, it } from "mocha"
import * as assert from "assert"

describe("test app realization", () =>
{
    it("test 1", () => 
    {
        src.testReliz.reinitState()
        src.testReliz.setFormName('ababa')
        src.testReliz.applyForm()
        src.testReliz.switchTask("ef176caf-f06c-4535-bf55-f1891dac00a0")
        src.testReliz.rerender()

        assert.strictEqual(src.testReliz.getTemplate(), '<app>' 
                + '<resp name="Mary">' 
                    + '<task name="Kiss the cat" ready="false">' 
                    + '<task name="Buy the milk" ready="true">' 
                + '</resp>' 
                + '<resp name="John">' 
                    + '<task name="Found the home" ready="true">' 
                    + '<task name="ababa" ready="false">' 
                + '</resp>' 
                + '<form name="">' 
            + '</app>')
    })
})