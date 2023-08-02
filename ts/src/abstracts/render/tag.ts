export type T = [string, Record<string, string>, T[]]

export const unclosedTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 
    'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']

export const render = (t: T): string => `
<${t[0]}${Object.keys(t[1]).map(k => ' ' + k + '="' + t[1][k] + '"')}>`
    + ((unclosedTags.includes(t[0])) 
        ? '' 
        : (t[2].map(k => render(k)).join("") + `</${t[0]}>`))