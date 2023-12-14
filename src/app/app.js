const express = require("express");
const morgan = require("morgan");
const router = require("../router/product.router.js");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("this is my app ");
});

app.use("/api/v1", router);

module.exports = app;
