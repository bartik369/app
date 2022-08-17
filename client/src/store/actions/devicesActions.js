import axios from "axios";
import ENV from "../../env.config";
import { GET_DEVICES, ADD_DEVICES, DELETE_DEVICES, UPDATE_DEVICES, ERROR_DEVICES } from "../types/typesDevices";


const getDevices = (devices) => ({
    type: GET_DEVICES,
    payload: devices,
    loading: true
});

export const loadDevices = () => {
    return async function(dispatch) {
        try {
            await axios.get(`${ENV.HOSTNAME}devices`).then((response) => {
                console.log(response)
                dispatch(getDevices(response.data))
            })
        } catch (error) {
            console.log(error)
        }
    }
}