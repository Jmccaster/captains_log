const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Log = require("./models/logs");

require("dotenv").config();

// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected to mongodb");
});

// Override for CRUD methods
const methodOverride = require("method-override");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Middleware

// Body parser
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Routes

// Index Route
app.get("/logs", (req, res) => {
  Log.find({}, (err, allLogs) => {
    console.log(err);

    res.render("Index", { logs: allLogs });
  });
});

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
  Log.create(req.body, (err, createdLog) => {
    console.log(err);
    // console.log("Created", createdLog);
  });
  res.redirect("/logs");
});

// Delete Route
app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, foundLog) => {
    console.log("Deleted", foundLog);
    res.redirect("/logs");
  });
});

// Edit Route
app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    console.log(err);
    res.render("Edit", { log: foundLog });
  });
});

// Update/Put Route
app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    res.redirect(`/logs/${req.params.id}`);
  });
});

// Show Route
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    console.log(err);
    console.log("Found", foundLog);
    res.render("Show", { log: foundLog });
  });
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
