const popularDestinationModel = require("../models/popular-destinations.model");

const getAllPopularDestinations = async () => {
  let popularDestinations = await popularDestinationModel.find({});
  return {
    message: "Popular destinations fetched successfully",
    popularDestinations,
  };
};

module.exports = {
  getAllPopularDestinations,
};
