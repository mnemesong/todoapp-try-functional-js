export type T<M extends string> = {
    template: string,
    params: M[]
}

function replaceAll(template: string, search: string, replace: string): string {
    let result = template.replace(search, replace);
    while (result !== template) {
        template = result
        result = template.replace(search, replace)
    }
    return result
}

export function render<M extends string>(
    template: T<M>, 
    insertions: Record<M, string>
): string {
    let result = template.template
    Object.keys(insertions).forEach(k => {
        result = replaceAll(result, `{{${k}}}`, insertions[k])
    })
    return result
}