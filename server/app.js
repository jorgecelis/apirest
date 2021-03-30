const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const helmet = require("helmet");

/** Instancia del servicio. */
const app = express();
app.use((req, res, next) => {
  next();
});

app.use(helmet());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("", router);

(module.exports = app), morgan;
