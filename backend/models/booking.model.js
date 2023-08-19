const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: true,
    unique: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  return: {
    type: String,
    required: true,
  },
  ship: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  noOfPassengers: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
