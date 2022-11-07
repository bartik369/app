import {
    CREATE_USER,
    GET_USER,
    GET_USERS,
    UPDATE_USER_PASSWORD
} from "../types/typesUser";

const initialState = {
    users: [],
    user: {},
    loading: true,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                loading: false,
            }
        case UPDATE_USER_PASSWORD:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default usersReducer;