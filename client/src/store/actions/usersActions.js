import axios from "axios";
import ENV from "../../env.config";
import {
    GET_USER,
    GET_USERS, 
    CREATE_USER,
    LOGIN_USER,
    UPDATE_USER_PASSWORD,
} from "../types/typesUsers.js";

import { REGISTER_FAIL, LOGIN_FAIL } from "../types/typesMessages";


const getUsers = (users) => ({
    type: GET_USERS,
    payload: users,
    loading: true,
});

const getUser = (user) => ({
    type: GET_USER,
    payload: user,
});

const login = (user) => ({
    type: LOGIN_USER,
    payload: user,
});

const addUser = () => ({
    type:CREATE_USER,
});

const userUpdatePassword = () => ({
    type: UPDATE_USER_PASSWORD,
});

const failLogin = (message) => ({
    type: LOGIN_FAIL,
    payload: message,

});

const failRegistration = (message) => ({
    type: REGISTER_FAIL,
    payload: message,
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
        }
    }
}

export const loginUser = (data) => {
    return async function(dispatch) {
        try {
            await axios.post(`${ENV.HOSTNAME}api/login`, data)
            .then((response) => {
                dispatch(login(response.data));
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken))
            })
        } catch (error) {
            // console.log("error from back =>", error.response.data)
            const message = (error.response 
                && error.response.data
                && error.response.data.message) || error.message || error.toString();
            dispatch(failLogin(message));
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