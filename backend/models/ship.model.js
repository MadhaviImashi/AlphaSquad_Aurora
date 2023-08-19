const mongoose = require("mongoose");

const shipSchema = new mongoose.Schema({
  shipName: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  shipTypes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ship",
    },
  ],
});

module.exports = mongoose.model("Ship", shipSchema);
