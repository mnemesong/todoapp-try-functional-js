export type T = {
    id: string,
    name: string,
    isReady: boolean,
}

export const clone = (u: T): T => ({...u})

export const createNew = (id: string, name: string) => ({
    id: id,
    name: name,
    isReady: false,
})

export const switchTask = (t: T): T => ({
    id: t.id,
    name: t.name,
    isReady: !t.isReady
})