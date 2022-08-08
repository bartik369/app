import { ADD_DEVICE, DELETE_DEVICE, UPDATE_DEVICE } from "../types/types";

export function addDevice() {
    return {
        type: ADD_DEVICE
    }
}
export function deleteDevice() {
    return {
        type: DELETE_DEVICE
    }
}
export function updateDevice() {
    return {
        type: UPDATE_DEVICE
    }
}