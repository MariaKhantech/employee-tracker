DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

--creating department table with id being the primary key
CREATE TABLE department (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
department_name VARCHAR(30),
PRIMARY KEY(id)
);

--created role table 
CREATE TABLE role (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(8, 2),
    department_id INTEGER(10),
    PRIMARY KEY(id)
);

CREATE TABLE employee(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10),
    PRIMARY KEY(id)
);