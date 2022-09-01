import { 
    GET_DEVICES, 
    ADD_DEVICES, 
    GET_DEVICE,
    DELETE_DEVICES, 
    UPDATE_DEVICES,} from "../types/typesDevices";

const initialState = {
    devices: [],
    device: {},
    loading: true, 
};

const devicesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DEVICES:
            return {
                ...state,
                devices: action.payload,
                loading: true,
            }
        case DELETE_DEVICES:
            return {
                ...state,
                device: action.payload,
                refreshing: true,
            }
        case ADD_DEVICES:
            return {
                ...state,
                device: action.payload,
                refreshing: true,
            }
        case UPDATE_DEVICES:
                return {
                    ...state,
                    device: action.payload,
                    refreshing: true,
                }
        case GET_DEVICE:
            return {
                ...state,
                device: action.payload,
                loading: false,
            }
        default:
            return state
    }
};

export default devicesReducer;