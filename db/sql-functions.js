const inquirer = require('inquirer');
const connection = require('./connection');

class sqlFunctions {
	//constructor has one proprty called this.connection, which is equal to the required connection from connection.js
	constructor() {
		this.connection = connection;
	}

	//terminates the connection to the database. This also terminates the CLI command prompts
	closeConnection() {
		this.connection.end();
	}

	//insert given department value into the department table
	addDepartment(department) {
		return this.connection.query('INSERT INTO department (department_name) values (?)', [ department ]);
	}

	//insert the given role details into the role table
	addRole(title, salary, department_id) {
		return this.connection.query('INSERT INTO role (title, salary, department_id) values (?,?,?)', [
			title,
			salary,
			department_id
		]);
	}

	//insert the given employee details into the employee table
	addEmployee(first_name, last_name, role_id, manager_id) {
		return this.connection.query(
			'INSERT INTO employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)',
			[ first_name, last_name, role_id, manager_id ]
		);
	}

	//view a list of all dept from the employee tracker database
	viewDepartments() {
		return this.connection.query('SELECT * FROM department;');
	}

	//view a list of all roles from the employee tracker database
	viewRoles() {
		return this.connection.query('SELECT * FROM role;');
	}

	//view a list of all employees from the employee tracker database
	viewEmployees() {
		return this.connection.query('SELECT * FROM employee;');
	}

	//return dept_name AS name, and id AS value - we can use name/value for inquirer choices
	listDepartments() {
		return this.connection.query('SELECT department_name as name, id as value FROM department;');
	}

	//return title AS name, and id AS value - we can use name/value for inquirer choices
	listRoles() {
		return this.connection.query('SELECT title as name, id as value FROM role;');
	}

	//https://www.mysqltutorial.org/sql-concat-in-mysql.aspx/
	//return concatenated first name and last name AS name, and id AS value - we can use name/value for inquirer choices
	listEmployees() {
		return this.connection.query(`SELECT CONCAT(first_name, ' ', last_name) AS name,id as value FROM employee;`);
	}

	//update the employee role
	updateEmployeeRoles(employee, role) {
		console.log(employee, role);
		return this.connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [ employee, role ]);
	}
}

module.exports = sqlFunctions;
