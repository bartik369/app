import React, { useState, useEffect } from 'react';


const useLogin = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [signupData, setSidnupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const loginHandler = (e) => {
        const {name, value} = e.target;
        setLoginData({...loginData, [name]: value});
        console.log(loginData)
    };

    const signupHandler = (e) => {
        const {name, value} = e.target;
        setSidnupData({...signupData, [name]: value});
        console.log(signupData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return {loginHandler, signupHandler, loginData, signupData, handleSubmit};

}

export default useLogin;
