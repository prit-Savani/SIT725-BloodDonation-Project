const mongoose = require("mongoose");
const colors = require("colors");

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the provided URL
    await mongoose.connect(process.env.MONGO_URL);
    // If connection is successful, log a success message
    console.log(
      `You are connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    // If connection fails, log an error message with the error details
    console.log(`Error while connecting to MongoDB: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
