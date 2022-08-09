import axios from "axios";
import ENV from "../../env.config"

let initialState = []

export const devicesReducer = (state = initialState, action) => {
    axios.get(`${ENV.HOSTNAME}devices`).then((response) => {
        initialState = response.data;
        console.log(initialState)
    });
    return state
}

