export type T<M> = {
    html: (m: M) => string,
    host: (m: M) => string
}

export const render = <M>(t: T<M>, m: M) => ({
    html: t.html(m),
    host: t.host(m)
})

export const renderMany = <M>(t: T<M>, models: M[]): Record<string, string[]> => {
    const rendered = models.map(m => render(t, m))
    const groups = {}
    rendered.forEach(el => groups[el.host] = [])
    rendered.forEach(el => groups[el.host].push(el.html))
    return groups
}