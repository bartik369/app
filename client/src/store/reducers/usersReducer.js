import {
    CREATE_USER,
    GET_USER,
    UPDATE_USER_PASSWORD
} from "../types/typesUser";

const initialState = {
    users: [],
    user: {},
    loading: true,
};

const usersReducer = (state => initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}

export default usersReducer;