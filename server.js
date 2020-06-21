const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();
const sqlFunctions = require('./db/sql-functions');

const sqlConnect = new sqlFunctions();

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

let listDep;
let listRoles;
let listEmployees;

//this function starts the application questions(entry point)
const startApp = async () => {
	//store list as the first thing we do
	await loadLists();
	//begin asking questions
	await inquirer
		.prompt(whatWouldYouLike)
		.then(async (response) => {
			console.log(response);
			//if statement that checks what the response is, and execute action
			if (response.selectedOption === 'Would you like to add a department?') {
				await addDep();
				startApp();
			}
			if (response.selectedOption === 'Would you like to add a role?') {
				await addRoles();
				startApp();
			}
			if (response.selectedOption === 'Would you like to add an employee?') {
				await addEmployees();
				startApp();
			}
			if (response.selectedOption === 'Would you like to view departments?') {
				await sqlConnect.viewDepartments().then((response) => {
					console.table(response);
				});
				startApp();
			}
			if (response.selectedOption === 'Would you like to view roles?') {
				await sqlConnect.viewRoles().then((response) => {
					console.table(response);
				});
				console.log('view role works');
				startApp();
			}
			if (response.selectedOption === 'Would you like to view employees?') {
				await sqlConnect.viewEmployees().then((response) => {
					console.table(response);
				});
				console.log('view emp works');
				startApp();
			}
			if (response.selectedOption === 'Would you like to update an employee role?') {
				console.log('view update role works');
				startApp();
			}
			if (response.selectedOption === 'Exit') {
				exit();
				console.log('exits');
			}
		})
		.catch((error) => {
			throw error;
		});
}; // end of if statments

const loadLists = async () => {
	//load the list of departments
	sqlConnect.listDepartments().then((response) => {
		listDep = response;
	});

	//load the list of Roles
	sqlConnect.listRoles().then((response) => {
		listRoles = response;
	});

	//load the list of Employees
	sqlConnect.listEmployees().then((response) => {
		listEmployees = response;
	});
};

//function to add a department
const addDep = async () => {
	await inquirer
		.prompt([
			{
				type: 'input',
				name: 'departmentName',
				message: 'Enter the department name:'
			}
		])
		.then(async (response) => {
			console.log(response);
			sqlConnect.addDepartment(response.departmentName);
		});
};

//function to add roles
const addRoles = async () => {
	await inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'Enter the title:'
			},
			{
				type: 'input',
				name: 'salary',
				message: 'Enter the salary:'
			},
			{
				type: 'list',
				name: 'departmentId',
				message: 'Select the department:',
				choices: listDep
			}
		])
		.then(async (response) => {
			console.log(response);
			sqlConnect.addRole(response.title, response.salary, response.departmentId);
		});
};

//function to add employee
const addEmployees = async () => {
	await inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'Enter the first name:'
			},
			{
				type: 'input',
				name: 'salary',
				message: 'Enter the last name:'
			},
			{
				type: 'list',
				name: 'departmentId',
				message: 'Select the role:',
				choices: listRoles
			},
			{
				type: 'list',
				name: 'departmentId',
				message: 'Select the manager:',
				choices: listEmployees
			}
		])
		.then(async (response) => {
			console.log(response);
			sqlConnect.addEmployee(response.title, response.salary, response.departmentId);
		});
};

//exits the commnnd line (CLI) application
const exit = () => {
	sqlConnect.closeConnection();
	console.log('Goodbye....and have a nice day! :)');
};

//calling startApp function,
startApp();
