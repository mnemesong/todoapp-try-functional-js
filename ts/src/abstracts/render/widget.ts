import * as tag from './tag'

export type T<M extends Record<string | symbol | number, any>> = {
    html: string,
    host: string,
} & M