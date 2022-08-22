import axios from "axios";
import ENV from "../../env.config";
import { GET_DEVICES, GET_DEVICE, ADD_DEVICES, DELETE_DEVICES, UPDATE_DEVICES, ERROR_DEVICES } from "../types/typesDevices";


const getDevices = (devices) => ({
    type: GET_DEVICES,
    payload: devices,
    loading: true
});

const getDevice = (device) => ({
    type: GET_DEVICE,
    payload: device,
})


const deviceDeleted = () => ({
    type: DELETE_DEVICES,
})

const deviceAdd = () => ({
    type: ADD_DEVICES,
})

export const loadDevices = () => {
    return async function(dispatch) {
        try {
            await axios.get(`${ENV.HOSTNAME}devices`)
            .then((response) => {
                dispatch(getDevices(response.data))
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteDevice = (id) => {
    console.log(id)
    return async function(dispatch) {
        try {
            await axios.delete(`${ENV.HOSTNAME}device/${id}`)
            .then((response) => {
                console.log(response.data)
                dispatch(deviceDeleted(response.data))
                dispatch(loadDevices())
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const addDevice = (device) => {
    return async function(dispatch) {
        try {
            await axios.post(`${ENV.HOSTNAME}insert`, device)
            .then((response) => {
                dispatch(deviceAdd());
            })
        } 
        catch (error) {
            console.log(error);
        }
    }
    
}

export const getsingleDevice = (id) => {
    return async function(dispatch) {
        try {
            await axios.get(`${ENV.HOSTNAME}device/${id}`)
            .then((response) => {
                dispatch(getDevice(response.data))
            })
        } 
        catch (error) {
            console.log(error)
        }
    }
}