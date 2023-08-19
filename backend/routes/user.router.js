const userController = require("../controllers/user.controller");
const { Router } = require("express");
const userRouter = Router();

userRouter.post("/login", userController.loginUser);
userRouter.post("/register", userController.registerUser);

module.exports = userRouter;
