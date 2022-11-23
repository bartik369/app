import { combineReducers } from "redux";
import devicesReducer from "./devicesReducer";
import modalReducer from "./modalReduces";
import todosReducer from "./todosReducer";
import usersReducer from "./usersReducer";
import messageReducer from "./messageReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer,
    user: usersReducer,
    messages: messageReducer,
    devices: devicesReducer,
    device: devicesReducer,
    todos: todosReducer,
    todo: todosReducer,
    modal: modalReducer,

});

export default rootReducer;