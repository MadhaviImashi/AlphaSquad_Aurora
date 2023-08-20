const popularDestinationController = require("../controllers/popular-destination");
const { Router } = require("express");
const popularDestinationRouter = Router();

popularDestinationRouter.get(
  "/",
  popularDestinationController.getAllPopularDestinations
);

module.exports = popularDestinationRouter;
