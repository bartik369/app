import { SET_SEARCH_QUERY } from "../types/typesSearchData";

const setQuery = (query) => ({
    type: SET_SEARCH_QUERY,
    payload: query,
})

export const setSearchQuery = (query) => {
    console.log(query)
    return function(dispatch) {
        try {
            dispatch(setQuery(query))
        } catch (error) {
            console.log(error)
        }
    }
}