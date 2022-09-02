import { OPEN_MODAL, CLOSE_MODAL } from "../types/typesModal";

const initialState = {
    modal: false,
};

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modal: action.payload,
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default modalReducer;