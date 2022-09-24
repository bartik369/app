import {useState} from 'react';


const useLogin = (validateLogin) => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const loginHandler = (e) => {
        const {name, value} = e.target;
        setLoginData({...loginData, [name]: value});
    };

    const login = (e) => {
        e.preventDefault();
        setErrors(validateLogin(loginData))
    }

    return {loginHandler, loginData, login, errors};

}

export default useLogin;
