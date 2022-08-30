import { 
    GET_TODO,
    GET_TODOS,
    ADD_TODOS,
    DELETE_TODOS,
    UPDATE_TODOS,} from "../types/typesTodos";

const initialState = {
    todos: [],
    todo: {},
    loading: true,
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }
        case DELETE_TODOS:
        case ADD_TODOS:
        case UPDATE_TODOS: 
            return {
                ...state,
                loading: false,
            }
        case GET_TODO:
            return {
                ...state,
                todo: action.payload,
                loading: false,
            }
        default:
            return state
    }
}
export default todosReducer;