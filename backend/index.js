require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.router");
const bookingRouter = require("./routes/booking.router");
const destinationRouter = require("./routes/destination.router");
const planetRouter = require("./routes/planet.router");
const shipRouter = require("./routes/ship.router");
const popularDestinationRouter = require("./routes/popular-destination.router");

const PORT = process.env.PORT || 5000;
// create express app
const app = express();

//json parsing function
app.use(express.json());

//routes
app.use("/api/users", userRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/destinations", destinationRouter);
app.use("/api/planets", planetRouter);
app.use("/api/ships", shipRouter);
app.use("/api/popular-destinations", popularDestinationRouter);

// connect to mongodb
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_ADMIN_USERNAME}:${process.env.MONGODB_ADMIN_PASSWORD}@alphasquadauroracluster.cy8nvic.mongodb.net/DB?retryWrites=true&w=majority`
);
const mongodbConnection = mongoose.connection;
mongodbConnection.on("error", (error) => console.error(error));
mongodbConnection.once("open", () => console.log("Connected to mongodb 😻"));

//start server
app.listen(PORT, () => console.log(`Server started at port:::${PORT} 🔥`));
