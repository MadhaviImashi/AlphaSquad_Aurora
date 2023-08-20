const shipModel = require("../models/ship.model");

const getAllShips = async () => {
  let ships = await shipModel.find({});
  return { message: "Ships fetched successfully", ships };
};

module.exports = {
  getAllShips,
};
