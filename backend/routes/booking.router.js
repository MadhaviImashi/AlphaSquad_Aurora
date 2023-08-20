const bookingController = require("../controllers/booking.controller");
const { Router } = require("express");
const bookingRouter = Router();

bookingRouter.get("/", bookingController.getAllBookings);
bookingRouter.post("/", bookingController.addBooking);

module.exports = bookingRouter;
