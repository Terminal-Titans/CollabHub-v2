const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Setting the MongoDB connection URL from the environment variable
    const mongoUrl = process.env.MONGO_URI;

    // Connecting to the MongoDB database
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the application with an error code
  }
};

module.exports = connectDB;
