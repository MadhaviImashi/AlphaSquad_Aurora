const bookingService = require("../services/booking.service");

const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't get all bookings", error: error.message });
  }
};

const addBooking = async (req, res) => {
  try {
    const booking = await bookingService.addBooking(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't create a booking", error: error.message });
  }
};

module.exports = {
  getAllBookings,
  addBooking,
};
