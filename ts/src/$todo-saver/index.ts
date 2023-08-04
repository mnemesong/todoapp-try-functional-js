import * as todo from "../todo-domain"
import * as assert from "assert"

type State = {
    s: todo.T|null
}

const state: State = {
    s: null
}

export const $saveTodo = (todo: todo.T): void => {
    state.s = todo
}

export const $getTodo = (): todo.T => {
    assert.ok(state.s !== null)
    return state.s
}