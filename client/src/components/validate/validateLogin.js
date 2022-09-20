
export default function validateInfo(loginData, signupData) {

    let errors = {}

    if (!loginData.email) {
        errors.email = 'Email required'
    } else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(loginData.email)) {
        errors.email = "Email address is invalid!"
    }

    if (!loginData.password) {
        errors.password = 'Password is required'
    } else if (loginData.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    
    return errors
}

