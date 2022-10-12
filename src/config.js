const { config } = require("dotenv");

require("dotenv").config();

const configVariables = {
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    port: process.env.DB_PORT || 5432,
    userName: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "root",
    host: process.env.DB_HOST || "localhost",
    name: process.env.DB_NAME
  }
};


module.exports = configVariables