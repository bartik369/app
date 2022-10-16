export default function validateAuth(signupData) {

    let errors = {}

    if (!signupData.email) {
        errors.email = 'Email обязателен!'
    } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(signupData.email)) {
        errors.email = "Недопустимый email!"
    }

    if (!signupData.password) {
        errors.password = 'Пароль обязателен!'
    } else if (signupData.password.length < 6) {
        errors.password = 'Пароль должен быть не менее 6 симоволов!'
    }

    if (!signupData.confirmPassword) {
        errors.confirmPassword = 'Пароль обязателен!'
    } else if (signupData.confirmPassword !== signupData.password) {
        errors.confirmPassword = 'Пароли не совпадают!'
    }

    return errors
}