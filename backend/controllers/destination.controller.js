const destinationService = require("../services/destination.service");

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await destinationService.getAllDestinations();
    res.status(200).json(destinations);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't get all destinations", error: error.message });
  }
};

module.exports = {
  getAllDestinations,
};
