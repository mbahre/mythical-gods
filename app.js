const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const mgRouter = require(`${__dirname}/routes/mgRoute`);

const app = express();

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests, Please try again later.",
});

app.use("/api", limiter);

app.use(morgan("dev"));

app.use(express.json());

app.use("/api", mgRouter);

app.use("*", function (req, res) {
  res
    .status(404)
    .json({ status: "fail", message: "This page does not exist." });
});

module.exports = app;
