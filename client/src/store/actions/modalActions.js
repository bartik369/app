import {
    OPEN_MODAL,
    CLOSE_MODAL,
    GET_MODAL_STATUS
} from "../types/typesModal";

const modalActive = (active) => ({
    type: OPEN_MODAL,
    payload: active
});

const modalInactive = (inactive) => ({
    type: CLOSE_MODAL,
    payload: inactive,
});

const getStatusModal = () => ({
    type: GET_MODAL_STATUS,
});

export const loadModalStatus = () => {
    return function(dispatch) {

    }
};

export const openModal = (active) => {
    return function(dispatch) {
        dispatch(modalActive(active));
    }
};
export const closeModal = (inactive) => {
    return function(dispatch) {
        dispatch(modalInactive(inactive));
    }
};