const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  currentResidency: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoritePlanets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Planet",
    },
  ],
  bookingHistory: {
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
  },
  totalTrips: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
