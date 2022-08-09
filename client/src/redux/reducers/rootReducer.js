import { combineReducers } from "redux";
import { devicesReducer } from "./devicesReducer";

export const rootReducer = combineReducers({
    devices: devicesReducer
})