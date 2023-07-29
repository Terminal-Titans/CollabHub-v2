const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/indexRoutes");
const connectDB = require("./database/connection");

// Creating a new Express app instance
const app = express();

// Loading environment variables from a .env file
dotenv.config();

// Allowing cross-origin requests
app.use(cors());

// Parsing incoming JSON data
app.use(express.json());

// Connecting to the MongoDB database
connectDB();

// Using the routes defined in indexRoutes.js
app.use("/", routes);

// Specifying the port to listen to
const port = process.env.PORT || 5000;

// Starting the server and logging a message when it is listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
