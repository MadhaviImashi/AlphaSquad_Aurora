const popularDestinationService = require("../services/popular-destination.service");

const getAllPopularDestinations = async (req, res) => {
  try {
    const popularDestinations =
      await popularDestinationService.getAllPopularDestinations();
    res.status(200).json(popularDestinations);
  } catch (error) {
    res.status(500).json({
      message: "Couldn't get all popular destinations",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPopularDestinations,
};
