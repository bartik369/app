import { SET_LOGIN_STATUS } from "../types/typesAuth";

const initialState = {
   isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isLoggedIn: true,
            }
        default:
            return state;

    }
};

export default authReducer;