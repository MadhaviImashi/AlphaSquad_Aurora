const shipController = require("../controllers/ship.controller");
const { Router } = require("express");
const shipRouter = Router();

shipRouter.get("/", shipController.getAllShips);

module.exports = shipRouter;
