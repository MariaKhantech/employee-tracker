const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

const connection = mysql.createConnection({
	// get all of our configuration values from the .env file
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

//connects to mysql database
connection.connect((err) => {
	if (err) {
		throw err;
	}
});

connection.query = util.promisify(connection.query);

module.exports = connection;
