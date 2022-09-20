import React, { useState, useEffect } from 'react';


const useLogin = (validateAuth, validateLogin) => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({})

    const loginHandler = (e) => {
        const {name, value} = e.target;
        setLoginData({...loginData, [name]: value});
    };

    const signupHandler = (e) => {
        const {name, value} = e.target;
        setSignupData({...signupData, [name]: value});
    };

    const login = (e) => {
        e.preventDefault();
        setErrors(validateLogin(loginData))
    }

    const signup = (e) => {
        e.preventDefault();
        setErrors(validateAuth(signupData))
    }


    return {loginHandler, signupHandler, loginData, signupData, login, signup, errors};

}

export default useLogin;
