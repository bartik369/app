import {useState, useEffect} from "react";
const useForm = () => {
    const [value, setValue] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

};

export {useForm};