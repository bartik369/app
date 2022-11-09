import {
    VALIDATION_LOGIN_ERROR,
    VALIDATION_SINGUP_ERROR,
} from "../types/typesValidation";

const initialState = {
    emailErrors: [],
    emailError: {},
    loadinf: true,
};

const validationReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALIDATION_SINGUP_ERROR:
        case VALIDATION_LOGIN_ERROR:
            return {
                ...state,
                emailError: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default validationReducer;