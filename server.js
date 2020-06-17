const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
require("dotenv").config();

const connection = mysql.createConnection({
    //Gets the configurations from .env file.
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect(function (err) {
    if (err) throw err;
    // runSearch"();
    console.log("connection successful");
  });
  