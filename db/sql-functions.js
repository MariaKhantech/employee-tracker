const inquirer = require('inquirer');
const connection = require('./connection');

class sqlFunctions {
	constructor() {
		this.connection = connection;
	}

	closeConnection() {
		this.connection.end();
	}

	addDepartment(department) {
		return this.connection.query('INSERT INTO department (department_name) values (?)', [ department ]);
		console.log('Add Department works');
	}

	addRole(title, salary, department_id) {
		return this.connection.query('INSERT INTO role (title, salary, department_id) values (?,?,?)', [
			title,
			salary,
			department_id
		]);
	}

	addEmployee() {
		console.log('Add Employee works');
	}

	viewDepartments() {
		console.log('view department Works');
		return this.connection.query('SELECT * FROM department;');
	}

	viewRoles() {
		console.log('Add roles works');
		return this.connection.query('SELECT * FROM role;');
	}

	viewEmployees() {
		console.log('Add employees works');
		return this.connection.query('SELECT * FROM employee;');
	}

	listDepartments() {
		return this.connection.query('SELECT department_name as name, id as value FROM department;');
	}

	listRoles() {
		return this.connection.query('SELECT title as name, id as value FROM role;');
	}
	//https://www.mysqltutorial.org/sql-concat-in-mysql.aspx/
	listEmployees() {
		return this.connection.query(
			`SELECT CONCAT(first_name, ' ', last_name) AS whole_name,id as value FROM employee;`
		);
	}
}

module.exports = sqlFunctions;
