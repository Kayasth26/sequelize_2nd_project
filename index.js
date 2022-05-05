const express = require('express');
const app = express();

const db = require('./app/models/sequelizeconnect');

const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const pass = require("./app/middleware/passport");


const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const routes = require("./app/routes/Route");
app.use("/", routes);

const logger = require("./app/logger/logger");
app.use(require("./app/middleware/response"));
app.use(require("./app/middleware/error").handleJoiErrors);
app.use(require("./app/middleware/error").handleErrors);

const port = process.env.PORT || 8000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));