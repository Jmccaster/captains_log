const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Middleware

// Body parser
app.use(express.urlencoded({ extended: false }));

// Routes

// New Route
app.get("/new", (req, res) => {
  res.render("New");
});

// Create Route
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  res.send(req.body);
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
