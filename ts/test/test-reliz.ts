import * as src from "../src"
import { describe, it } from "mocha"
import * as assert from "assert"

describe("test app realization", () =>
{
    it("test 1", () => 
    {
        const renderConfig: src.app.appToRender.RenderConfig = ({
            taskRender: (m) => `<task name="${m.name}" ready="${m.isReady}">`,
            respRender: (m, t) => `<resp name="${m.name}">${t}</resp>`,
            formRender: (m) => `<form name="${m.name}">`
        })
        
        const renderTemplate = (resps: string, form: string) => `<app>${resps}${form}</app>`

        let template = renderTemplate('', '')
        
        let state: src.app.T = ({
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

        const rerender = () => {
            const {resps, form} = src.app.appToRender
                .toRender(state, renderConfig)
            template = renderTemplate(resps, form)
        }

        state.form.name = "ababa"
        state = src.app.applyForm(state)
        state = src.app.switchTask(state, "ef176caf-f06c-4535-bf55-f1891dac00a0")
        rerender()

        assert.strictEqual(template, '<app>' 
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