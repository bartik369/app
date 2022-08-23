import { 
    GET_DEVICES, 
    ADD_DEVICES, 
    GET_DEVICE,
    DELETE_DEVICES, 
    UPDATE_DEVICES, 
    ERROR_DEVICES } from "../types/typesDevices";

const initialState = {
    devices: [],
    device: {},
    loading: true, 
}

const devicesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DEVICES:
            return {
                ...state,
                devices: action.payload,
                loading: false,
            }
        case DELETE_DEVICES:
        case ADD_DEVICES:
            return {
                ...state,
                loading: false,
            }
        case GET_DEVICE:
            return {
                ...state,
                device: action.payload,
                loading: false,
            }
        case UPDATE_DEVICES:
            return {
                ...state,
                loading: false,
            }
        
        default:
            return state
    }
};

export default devicesReducer;