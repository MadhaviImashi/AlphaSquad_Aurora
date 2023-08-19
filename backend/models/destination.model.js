const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Destination", destinationSchema);
