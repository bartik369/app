import { combineReducers } from "redux";
import devicesReducer from "./devicesReducer";
import modalReducer from "./modalReduces";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
    devices: devicesReducer,
    device: devicesReducer,
    todos: todosReducer,
    todo: todosReducer,
    modal: modalReducer,
});

export default rootReducer;