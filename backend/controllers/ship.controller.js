const shipService = require("../services/ship.service");

const getAllShips = async (req, res) => {
  try {
    const ships = await shipService.getAllShips();
    res.status(200).json(ships);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't get all ships", error: error.message });
  }
};

module.exports = {
  getAllShips,
};
