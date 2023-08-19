const mongoose = require("mongoose");

const popularDestinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PopularDestination", popularDestinationSchema);
