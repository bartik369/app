<<<<<<< HEAD
import { MODAL_ADD, MODAL_UPDATE, MODALS_GET } from "../types/typesModal";

const modalsGet = () => ({
    type: MODALS_GET,
    loading: true,
});

const modalAdding = (status) => ({
    type: MODAL_ADD,
    payload: status,
=======
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
>>>>>>> c19a6ae3e30fc9b39b27d66a19c80fcf4a6e73fe
});


const modalUpdating = (status) => ({
    type: MODAL_UPDATE,
    payload: status,
});


export const loadModalStatus = () => {
    return function(dispatch) {
        try {
            dispatch(modalsGet());
        } 
        catch (error) {
            console.log(error)
        }
    }
};

<<<<<<< HEAD
export const addModal = (status) => {
    return function(dispatch) {
        try {
            dispatch(modalAdding(status));
            dispatch(modalsGet());        } 
        catch (error) {
            console.log(error)
        }
    }
}

export const updateModal = (status) => {
    return function(dispatch)  {
       try {
        dispatch(modalUpdating(status));
        dispatch(modalsGet());
       } 
       catch (error) {
        
       }
    }
}
=======
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
>>>>>>> c19a6ae3e30fc9b39b27d66a19c80fcf4a6e73fe
