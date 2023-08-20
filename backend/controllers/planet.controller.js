const planetService = require("../services/planet.service");

const getAllPlanets = async (req, res) => {
  try {
    const planets = await planetService.getAllPlanets();
    res.status(200).json(planets);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't get all planets", error: error.message });
  }
};

const getPlanetByName = async (req, res) => {
  try {
    const planet = await planetService.getPlanetByName(req.planetName);
    res.status(200).json(planet);
  } catch (error) {
    res.status(500).json({
      message: "Couldn't get a planet by the planet name",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPlanets,
  getPlanetByName,
};
