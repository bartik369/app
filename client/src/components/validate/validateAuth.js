import useLogin from "../../hooks/useLogin.jsx"

export default function validateInfo(signupData) {

    let errors = {}

    if (!signupData.email) {
        errors.email = 'Email required'
    } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(signupData.email)) {
        errors.email = "Email address is invalid!"
    }

    if (!signupData.password) {
        errors.password = 'Password is required'
    } else if (signupData.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    if (!signupData.confirmPassword) {
        errors.confirmPassword = 'Password is required too'
    } else if (signupData.confirmPassword !== signupData.password) {
        errors.confirmPassword = 'Password does not match'
    }

    return errors
}

