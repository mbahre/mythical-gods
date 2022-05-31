const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const morgan = require("morgan");

const mgRouter = require(`${__dirname}/routes/mgRoute`);

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api", mgRouter);

app.use("*", function (req, res) {
  res
    .status(404)
    .json({ status: "fail", message: "This page does not exist." });
});

module.exports = app;
