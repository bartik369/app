import userService from "../services/user-service.js";

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            return res.json(userData);
        } 
        catch (error) {
            console.log(error);
        }
    };

    async login(req, res, next) {
        try {
            
        } 
        catch (error) {
            console.log(error);
        }
    };

    async logout(req, res, next) {
        try {
            
        } 
        catch (error) {
            console.log(error);
        }
    };

    async activate(req, res, next) {
        try {
            
        } 
        catch (error) {
            console.log(error);
        }
    };

    async refresh(req, res, next) {
        try {
            
        } 
        catch (error) {
            console.log(error);
        }
    };

    async getUsers(req, res, next) {
        try {
           res.json(['3333', '555555']) ;
        } 
        catch (error) {
            console.log(error);
        }
    };
};

export default new UserController();