import { combineReducers } from "redux";
import devicesReducer from "./devicesReducer";

const rootReducer = combineReducers({
    devices: devicesReducer,
    device: devicesReducer,
});

export default rootReducer;