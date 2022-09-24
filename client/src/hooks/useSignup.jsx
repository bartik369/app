import {useState} from 'react';

const useSignup = (validateAuth) => {

    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const signupHandler = (e) => {
        const {name, value} = e.target;
        setSignupData({...signupData, [name]: value});
    };

    const signup = (e) => {
        e.preventDefault();
        setErrors(validateAuth(signupData))
    }

    return {signupHandler, signupData, signup, errors}

}

export default useSignup;