const bookingModel = require("../models/booking.model");

const getAllBookings = async () => {
  const bookings = await bookingModel.find({});
  return { message: "Bookings fetched successfully", bookings };
};

const addBooking = async (data) => {
  const booking = await bookingModel.create({ ...data });
  return { message: "Booking is created successfully", booking };
};

module.exports = {
  getAllBookings,
  addBooking,
};
