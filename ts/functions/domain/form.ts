export type T = {
    name: string,
    responsibleId: string
}

export const  clone = (t: T): T => (
    {name: t.name, responsibleId: t.responsibleId})

export const construct = (defResId: string): T => (
    {name: "", responsibleId: defResId})