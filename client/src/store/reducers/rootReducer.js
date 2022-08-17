import { combineReducers } from "redux";
import devicesReducer from "./devicesReducer";

const rootReducer = combineReducers({
    devices: devicesReducer,
});

export default rootReducer;