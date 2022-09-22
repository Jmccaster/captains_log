const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/new", (req, res) => {
  res.render("New");
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
