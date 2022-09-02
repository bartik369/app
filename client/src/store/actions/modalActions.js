import { OPEN_MODAL, CLOSE_MODAL } from "../types/typesModal";


const enableModal = () => ({

});


const disableModal = () => ({

});



export const setActiveModal = (dataStatus) => {
    return async function(dispatch) {
        try {
            dispatch(enableModal(dataStatus));
        } 
        catch (error) {
            
        }
    }
};


export const setInactiveModal = (dataStatus) => {
    return async function(dispatch) {
        try {
            dispatch(disableModal(dataStatus));
        } 
        catch (error) {
            
        }
    }
};