const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Set JWT secret from environment variables
const Jwt_secret = process.env.JWT_SECRET;

// Import the USER model
const USER = mongoose.model("USER");

// Controller for user signup
const signup = (req, res) => {
  const { name, userName, email, password } = req.body;
  if (!name || !email || !userName || !password) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  // Check if the user already exists with the provided email or username
  USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
    (savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User already exists with that email or userName" });
      }

      // Hash the password
      bcrypt.hash(password, 12).then((hashedPassword) => {
        // Create a new user
        const user = new USER({
          name,
          email,
          userName,
          password: hashedPassword,
        });

        // Save the user to the database
        user
          .save()
          .then((user) => {
            res.json({ message: "Registered successfully" });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
          });
      });
    }
  );
};

// Controller for user signin
const signin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please add email and password" });
  }

  // Find the user with the provided email
  USER.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email" });
    }

    // Compare the provided password with the hashed password in the database
    bcrypt
      .compare(password, savedUser.password)
      .then((match) => {
        if (match) {
          // Create a JWT token for the authenticated user
          const token = jwt.sign({ _id: savedUser.id }, Jwt_secret);
          const { _id, name, email, userName } = savedUser;

          // Send the token and user information in the response
          res.json({ token, user: { _id, name, email, userName } });

          console.log({ token, user: { _id, name, email, userName } });
        } else {
          return res.status(422).json({ error: "Invalid password" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });
};

// Export the controller functions
module.exports = {
  signup,
  signin,
};
