const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  planetDestinations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
    },
  ],
});

module.exports = mongoose.model("Planet", planetSchema);
