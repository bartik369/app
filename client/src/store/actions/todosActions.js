import axios from "axios";
import ENV from "../../env.config";
import {
    GET_TODOS,
    GET_TODO,
    ADD_TODOS,
    DELETE_TODOS,
    UPDATE_TODOS,
    ERROR_TODOS,
} from "../types/typesTodos.js";


const getTodos = (todos) => ({
    type: GET_TODOS,
    payload: todos,
    loading: true,
});

const todoAdded = () => ({
    type:ADD_TODOS,
})

export const loadTodos = () => {
    return async function(dispatch) {
        try {
            await axios.get(`${ENV.HOSTNAME}todos`)
            .then((response) => {
                console.log(response.data)
                dispatch(getTodos(response.data))
            })
        } 
        catch (error) {
            console.log(error);
        }
    }

};

export const addTodo = (todo) => {
    return async function(dispatch) {
        try {
            await axios.post(`${ENV.HOSTNAME}newtodo`)
            .then((response) => {
                dispatch(todoAdded(response.data))
            })
        } 
        catch (error) {
            console.log(error)
        }
    }
}