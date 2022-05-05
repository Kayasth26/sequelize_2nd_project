const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  HOST: process.env.DB_HOST_NAME,
  USER: process.env.DB_USER_NAME,
  PASSWORD: process.env.DB_PASS,
  DB: process.env.DB_NAME,
  DIALECT: process.env.DIALECT_NAME,
};