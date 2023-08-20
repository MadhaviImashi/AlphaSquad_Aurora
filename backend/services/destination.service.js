const destinationModel = require("../models/destination.model");

const getAllDestinations = async () => {
  let destinations = await destinationModel.find({});
  return { message: "Destinations fetched successfully", destinations };
};

module.exports = {
  getAllDestinations,
};
