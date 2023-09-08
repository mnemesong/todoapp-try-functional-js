import * as data from "../data"
import * as src from "../functions"

const state: {
    oldPage: src.domain.page.T,
    newPage: src.domain.page.T
} = {
    oldPage: {
        form: {
            responsibleId: "",
            name: ""
        },
        responsibles: []
    },
    newPage: data.page.init
}

export const getOldPage = (): Readonly<src.domain.page.T> => state.oldPage

export const getNewPage = (): Readonly<src.domain.page.T> => state.newPage

export const setNewPage = (p: src.domain.page.T) => {
    state.newPage = p
}

export const updatePage = () => {
    state.oldPage = state.newPage
}