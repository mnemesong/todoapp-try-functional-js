import * as command from "../commands"

export const types = ['change', 'click'] as const

export type T = {
    selector: string,
    event: typeof types[number],
    commands: command.T[]
}