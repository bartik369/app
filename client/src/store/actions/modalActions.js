import { 
    OPEN_MODAL, 
    CLOSE_MODAL, 
    GET_MODAL_STATUS } from "../types/typesModal";

const modalActive = () => ({
    type: OPEN_MODAL,
});

const modalInactive = () => ({
    type: CLOSE_MODAL,
});

const getStatusModal = () => ({
    type: GET_MODAL_STATUS,
});

export const loadModalStatus = () => {
    return function(dispatch) {

    }
};

export const openModal = (modalStatus) => {
    let status;
    return function(dispatch)  {
        if (modalStatus === !true) {
            status = "12345"
            dispatch(modalActive(status));
            dispatch(getStatusModal())
        }
    }
}