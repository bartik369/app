import express from "express";
import userController from "../controllers/user-controller.js";
const router = express.Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getUser);
router.get('/auth', userController.authUser);
router.post('/reset', userController.resetPassword);
router.post('/reset/:userId/:link', userController.reset);

export default router;