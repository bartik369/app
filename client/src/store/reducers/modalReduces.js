import {MODAL_ADD, MODAL_UPDATE, MODALS_GET } from "../types/typesModal";

const initialState = {
    update: false,
    add: false,
};

const modalReducer = (state = initialState, action) => {
<<<<<<< HEAD
    switch(action.type) {
        case MODALS_GET:
=======
    switch (action.type) {
        case GET_MODAL_STATUS:
>>>>>>> c19a6ae3e30fc9b39b27d66a19c80fcf4a6e73fe
            return {
                ...state,
                modal: action.payload,
                loading: true,
            }
        case MODAL_ADD:
            return {
                ...state,
               add: action.payload,
            }
        case MODAL_UPDATE:
            return {
                ...state,
                update: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default modalReducer;