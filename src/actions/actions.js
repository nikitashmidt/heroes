export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}
export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}
export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}
export const heroesRemove = (id) => {
    return {
        type: 'HEROES_REMOVE',
        payload: id
    }
}
export const heroesAdd = (id, text,filter) => {
    return {
        type: 'HEROES_ADD',
        payload: { id, text, filter }
    }
}