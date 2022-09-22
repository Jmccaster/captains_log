const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Log = require("./models/logs");

require("dotenv").config();

// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to mongodb");
});

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Middleware

// Body parser
app.use(express.urlencoded({ extended: false }));

// Routes

// New Route
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Create Route
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(
    req.body,
    (err,
    (createLog) => {
      console.log(err);
      console.log("Created", createLog);
    })
  );
  res.redirect("/logs");
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
