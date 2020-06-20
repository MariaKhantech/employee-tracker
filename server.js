const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();
const sqlFunctions = require('./lib/sql-functions');

//Starts our connection
const connection = mysql.createConnection({
	//Gets the configurations from .env file.
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

//Starting questions and options for the application what would you like variable is to start what would you like to do?
const whatWouldYouLike = [
	{
		type: 'list',
		name: 'selectedOption',
		message: 'What would you like to do?',
		choices: [
			'Would you like to add a department?',
			'Would you like to add a role?',
			'Would you like to add an employee?',
			'Would you like to view departments?',
			'Would you like to view roles?',
			'Would you like to view employees?',
			'Would you like to update an employee role?',
			'Exit'
			// 'View all employees',
		]
	}
];
//connects to mysql database
connection.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('connection successful');
	startApp();
});

//this function starts the application questions
const startApp = async () => {
	await inquirer
		.prompt(whatWouldYouLike)
		.then(async (response) => {
			console.log(response);
			//if statement that checks what the response is, and execute action
			if (response.selectedOption === 'Would you like to add a department?') {
				console.log('department works');
				startApp();
			} else if (response.selectedOption === 'Would you like to add a role?') {
				console.log('role works');
				startApp();
			} else if (response.selectedOption === 'Would you like to add an employee?') {
				console.log('employee works');
				startApp();
			} else if (response.selectedOption === 'Would you like to view departments?') {
				console.log('view dept works');
				startApp();
			} else if (response.selectedOption === 'Would you like to view roles?') {
				console.log('view role works');
				startApp();
			} else if (response.selectedOption === 'Would you like to view employees?') {
				console.log('view emp works');
				startApp();
			} else if (response.selectedOption === 'Would you like to update an employee role?') {
				console.log('view update role works');
				startApp();
			} else if (response.selectedOption === 'Exit') {
				console.log('exits');
			} else {
				console.log('something wrong');
			}
		})
		.catch((error) => {
			throw error;
		});
};
