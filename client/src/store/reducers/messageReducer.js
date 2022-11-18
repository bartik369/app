import {
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_MESSAGES,
} from "../types/typesMessages";

const initialState = {
    messages: [], 
    loading: true,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                loading: false,
            }
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