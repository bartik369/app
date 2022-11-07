import axios from "axios";
import ENV from "../../env.config";
import {
    GET_USER,
    GET_USERS, 
    CREATE_USER, 
    UPDATE_USER_PASSWORD
} from "../types/typesUsers.js";

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users,
    loading: true,
});

const getUser = () => ({
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
            await axios.post(`${ENV.HOSTNAME}newuser`, user)
            .then((response) => {
                dispatch(addUser(response.data));
            })
        } catch (error) {
            console.log(error)
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
            await axios.get(`${ENV.HOSTNAME}users`)
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
                dispatch()
            })
        } catch (error) {
            console.log(error);
        }
    }
}