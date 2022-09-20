import React, { useState, useEffect } from 'react';


const useLogin = (validateAuth) => {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateAuth(signupData))
    }

    return {loginHandler, signupHandler, loginData, signupData, handleSubmit, errors};

}

export default useLogin;
