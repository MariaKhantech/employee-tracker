
INSERT INTO department (id, department_name) values (1, 'Sales');
INSERT INTO department(id, department_name) values (2, 'Engineering');
INSERT INTO department (id, department_name) values (3, 'Finance');
INSERT INTO department (id, department_name) values (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) values (1, 'Salesperson', 850000, 1);
INSERT INTO role (id, title, salary, department_id) values (2, 'Software Engineer', 100000, 2);
INSERT INTO role (id, title, salary, department_id) values (3, 'Accountant', 85000, 3 );
INSERT INTO role (id, title, salary, department_id) values (4, 'Attorney',85000), 4;
INSERT INTO role (id, title, salary, department_id) values (5, 'Sales Manager', 100000, 1);
INSERT INTO role (id, title, salary, department_id) values (6, 'Software Engineer Manager', 150000, 2);
INSERT INTO role (id, title, salary, department_id) values (7, 'Accountant Manager', 100000, 3);
INSERT INTO role (id, title, salary, department_id) values (8, 'Lead Attorney'120000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (1, 'Steffi', 'Jerome', 7, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (2, 'Jose', 'Ortega', 3, 7);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (3, 'Maria', 'Khan', 6, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (4, 'Ryan', 'Mathews', 2, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (5, 'Shannon', 'Trainor' 5, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (6, 'Sara', 'Stig' 3, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (7, 'Remi', 'Ibraheem' 8, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (8, 'Sheena', 'Brissot' 4, 8);