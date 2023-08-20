const planetModel = require("../models/planet.model");

const getAllPlanets = async () => {
  let planets = await planetModel.find({});
  return { message: "Planets fetched successfully", planets };
};

const getPlanetByName = async (name) => {
  let planet = await planetModel.findOne({ name });
  if (!planet) {
    throw new Error("Planet couldn't found for the given name");
  }
  return { message: "A planet is fetched by name successfully", planet };
};

module.exports = {
  getAllPlanets,
  getPlanetByName,
};
