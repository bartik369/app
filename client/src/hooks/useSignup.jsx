import {useState, useEffect} from 'react';


const useSignup = (validateAuth) => {



    const [signupData, setSignupData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (Object.keys(errors).length !== 0) {
            setErrors(validateAuth(signupData));
        }
    }, [signupData]);

    const signupHandler = (e) => {
        const {name, value} = e.target;
        setSignupData({...signupData, [name]: value});
    };

    const signup = (e) => {
        e.preventDefault();
        setErrors(validateAuth(signupData));
        console.log(errors)
    };

    console.log("check losp memory")

    return {signupHandler, signupData, signup, errors};

}

export default useSignup;
