import userService from "../services/user-service.js";
import ApiError from "../exceptions/api-error.js";
import tokenService from "../services/token-service.js";


class UserController {
    async registration(req, res, next) {
        try {
            const { displayname, email, password } = req.body;
            const userData = await userService.registration(displayname, email, password);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                httpsOnly: true,
            });
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    };

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                httpsOnly: true,
            });
            return res.json(userData)
        } catch (err) {
            next(err);
        }
    };

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            // const token = await userService.logout(refreshToken);
            await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            // return res.json(token);
            return res.status(200).json({ message: "Logout success" })
        } catch (err) {
            next(err);
        }
    };

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (err) {
            next(err);
        }
    };

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookie;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                httpsOnly: true,
            });
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    };

    async resetPassword(req, res, next) {
        try {
            const { email } = req.body;
            const userData = await userService.resetPassword(email)
            return res.json(userData);
        } catch (error) {

        }
    }

    async checkResetLink(req, res, next) {
        try {
            const resetPasswordLink = req.params.link;
            const userData = await userService.checkResetPasswordLink(resetPasswordLink);
            return res.json(userData)
        } catch (err) {
            next(err);
        }
    }

    async setNewPassword(req, res, next) {
        try {
            console.log("this is userId for link", userData)
        } catch (error) {

        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            return res.json(users);
        } catch (err) {
            next(err);
        }
    };

    async getUser(req, res, next) {
        try {
            const user = await userService.getUser();
        } catch (error) {

        }
    }

    async authUser(req, res, next) {

        if (req.method === 'OPTIONS') {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1];

            if (!token) {
                throw ApiError.UnauthorizedError("Вы не авторизированы")
            }
            const userData = tokenService.validateAccessToken(token);
            return res.json(userData)
                // req.user = userData;
                // next()

        } catch (error) {
            return res.status(403).json({ message: "Пользователь не авторизован" })
        }
    }
};

export default new UserController();