
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const application = require("./config/application");
const database = require("./config/database");
const helmet = require("helmet");
const path = require("path");
const passport = require("passport");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Register Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Register Routes
app.use("/", routes);

// Connect to database
mongoose
  .connect(database.mongoUri, database.mongoOptions)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Boot Application
const PORT = process.env.PORT || application.port;
const server = app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});

// Handle EADDRINUSE error
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    throw err;
  }
});


