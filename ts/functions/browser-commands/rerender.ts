export const commands = ['innerHtml'] as const

export type T = {
    command: typeof commands[number],
    selector: string,
    content: string
}