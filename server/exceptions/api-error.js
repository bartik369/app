export default class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    };

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    };

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    };

    static EmailError(message, errors = []) {
        errors.push({ email: message })
        return new ApiError(400, message, errors.email);
    };

    static PasswordError(message, errors = []) {
        errors.push({ password: message })
        return new ApiError(400, message, errors);
    };

    static EmailExist(message, errors = []) {
        errors.push({ email: message })
        return new ApiError(400, message, errors.email);
    };
};