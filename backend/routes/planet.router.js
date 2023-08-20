const planetController = require("../controllers/planet.controller");
const { Router } = require("express");
const planetRouter = Router();

planetRouter.get("/", planetController.getAllPlanets);
planetRouter.get("/:planetName", planetController.getPlanetByName);

module.exports = planetRouter;
