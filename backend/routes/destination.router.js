const destinationController = require("../controllers/destination.controller");
const { Router } = require("express");
const destinationRouter = Router();

destinationRouter.get("/", destinationController.getAllDestinations);

module.exports = destinationRouter;
