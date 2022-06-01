const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const mgRouter = require(`${__dirname}/routes/mgRoute`);
const globalError = require(`${__dirname}/utils/errorMsg`);

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

app.use(mongoSanitize());

app.use(xss());

app.use("/api", mgRouter);

app.use("*", function (req, res, next) {
  return next(new Error("This page does not exist"));
});

app.use(globalError);

module.exports = app;
