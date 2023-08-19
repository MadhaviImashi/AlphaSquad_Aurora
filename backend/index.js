require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
// create express app
const app = express();

// connect to mongodb
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_ADMIN_USERNAME}:${process.env.MONGODB_ADMIN_PASSWORD}@alphasquadauroracluster.cy8nvic.mongodb.net/?retryWrites=true&w=majority`
);
const mongodbConnection = mongoose.connection;
mongodbConnection.on("error", (error) => console.error(error));
mongodbConnection.once("open", () => console.log("Connected to mongodb 😻"));

//start server
app.listen(PORT, () => console.log(`Server started at port:::${PORT} 🔥`));
