DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

--creating department table with id being the primary key
CREATE TABLE department (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
name VARCHAR(100),
PRIMARY KEY(id);
);
