import axios from "axios";
import ENV from "../../env.config";
import {
    GET_USER,
    GET_USERS, 
    CREATE_USER,
    LOGIN_USER,
    LOGOUT_USER,
    UPDATE_USER_PASSWORD,
} from "../types/typesUsers.js";

import {
    CLEAN_MESSAGES,
    LOGIN_FAIL,
 } from "../types/typesMessages";

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

const logout = () => ({
    type:LOGOUT_USER,
})

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

const removeMessages = () => ({
    type: CLEAN_MESSAGES,
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
            console.log(error);
            const message = error.response.data.errors;
            dispatch(failLogin(message));
        }
    }
}

export const loginUser = (data) => {
    return async function(dispatch) {
        try {
            await axios.post(`${ENV.HOSTNAME}api/login`, data)
            .then((response) => {
                // console.log(response.data.user.isActivated)
                console.log("data after login", response.data)
                dispatch(login(response.data));
                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
            })
        } catch (error) {
            console.log(error)
            const message = error.response.data.errors;
            dispatch(failLogin(message));
        }
    }
}

export const logoutUser = () => {
    return function(dispatch) {
        localStorage.removeItem("accessToken");
        dispatch(logout());
    }
};

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

export const CleanMessages = () => {
    return function (dispatch) {
        dispatch(removeMessages());
    }
}