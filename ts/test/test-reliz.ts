import * as app from "../src/app"
import { describe, it } from "mocha"
import * as abstr from "../src/abstracts"
import * as assert from "assert"

describe("test app realization", () =>
{
    it("test 1", () => 
    {
        const renderConfig: app.mappers.render.RenderConfig = ({
            taskRender: (m) => `<task name="${m.name}" ready="${m.isReady}">`,
            respRender: (m, t) => `<resp name="${m.name}">${t}</resp>`,
            formRender: (m) => `<form name="${m.name}">`
        })
        
        const renderTemplate = (resps: string, form: string) => `<app>${resps}${form}</app>`

        let template = renderTemplate('', '')
        
        let state: app.records.state.T = app.records.state.init()

        const rerender = () => {
            state = app.records.state.updateEventHistory(state)
            const {resps, form} = app.mappers.render.toRender(state.store, renderConfig)
            template = renderTemplate(resps, form)
        }

        const addEvent = (
            e: abstr.event.rec.T<typeof app.records.history.eventNames[number], any>
        ) => {
            state.history = app.records.history.addEvent(state.history, e)
        }

        state.store.form.name = "ababa"
        addEvent(app.events.applyForm.create())
        rerender()

        assert.strictEqual(template, '<app>' 
                + '<resp name="Mary">' 
                    + '<task name="Kiss the cat" ready="false">' 
                    + '<task name="Buy the milk" ready="true">' 
                + '</resp>' 
                + '<resp name="John">' 
                    + '<task name="Found the home" ready="false">' 
                    + '<task name="ababa" ready="false">' 
                + '</resp>' 
                + '<form name="">' 
            + '</app>')
    })
})