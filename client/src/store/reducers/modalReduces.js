import { OPEN_MODAL, CLOSE_MODAL, GET_MODAL_STATUS } from "../types/typesModal";

const initialState = {
    modal: false,
};

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MODAL_STATUS:
            return {
                ...state,
                modal: action.payload,
                loading: true,
            }
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