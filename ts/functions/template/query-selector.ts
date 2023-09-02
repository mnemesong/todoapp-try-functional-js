export type T = Record<string, string>

export const merge = (t: T[]): T => {
    return t.reduce((acc: Record<string, string>, selector) => Object.keys(selector)
        .reduce((sAcc: Record<string, string>, k: string) => {
            return (sAcc[k]) 
                ? {...sAcc, [k]: sAcc[k] + selector[k]}
                : {...sAcc, [k]: selector[k]}
        }, acc), 
    {})
}