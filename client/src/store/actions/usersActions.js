import axios from "axios";
import ENV from "../../env.config";
import {
    GET_USER,
    GET_USERS, 
    CREATE_USER, 
    UPDATE_USER_PASSWORD,
} from "../types/typesUsers.js";

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users,
    loading: true,
});

const getUser = (user) => ({
    type: GET_USER,
    payload: user,
});

const addUser = () => ({
    type:CREATE_USER,
});

const userUpdatePassword = () => ({
    type: UPDATE_USER_PASSWORD,
});


export const createUser = (user) => {
    return async function(dispatch) {
        try {
            await axios.post(`${ENV.HOSTNAME}api/registration`, user)
            .then((response) => {
                dispatch(addUser(response.data));
                console.log(response.data)
            });
        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
        }
    }
}

export const loadUser = (id) => {
    return async function(dispatch) {
        try {
            await axios.get(`${ENV.HOSTNAME}user${id}`)
            .then((response) => {
                dispatch(getUser(response.data));
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export  const loadUsers = () => {
    return async function(dispatch) {
        try {
            await axios.get(`${ENV.HOSTNAME}api/users`)
            .then((response) => {
                dispatch(getUsers(response.data))
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const updateUserPassword = (user, id) => {
    return async function (dispatch) {
        try {
            await axios.put(`${ENV.HOSTNAME}user/${id}`, user)
            .then((response) => {
                dispatch(userUpdatePassword(response.data));
                dispatch(loadUsers())
            })
        } catch (error) {
            console.log(error);
        }
    }
}