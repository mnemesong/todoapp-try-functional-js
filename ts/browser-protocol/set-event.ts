export const types = ['change', 'click'] as const

export type T<Command> = {
    selector: string,
    event: typeof types[number],
    commands: Command[]
}