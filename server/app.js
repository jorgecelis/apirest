const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const helmet = require("helmet");
const cors = require("cors");
const ErrorMiddleware = require('./src/middlewares/error.middleware')


/** Instancia del servicio. */
const app = express();

app.use(cors());

app.use((req, res, next) => {
  next();
});





app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(ErrorMiddleware.catchGenericErrors);
app.use("", router);

app.use(ErrorMiddleware.catchNotFoundError);

(module.exports = app), morgan;
