import {
    LOGIN_FAIL,
    REGISTER_FAIL,
} from "../types/typesMessages";

const initialState = {
    messages: [], 
    loading: true,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FAIL:
            return {
                ...state,
                messages: action.payload,
            }
        case REGISTER_FAIL:
            return {
                ...state,
                messages: action.payload,
            }
        default:
            return state
    }
}

export default messageReducer;