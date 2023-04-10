-- GET all departments
SELECT id, name_id FROM department;

--Get all roles with the departments information
SELECT role_id, role.title, role.salary, department.name_id AS department
FROM role
INNER JOIN department ON role.department_id = department.name_id;


-- Get all employees with the role and manger information
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name_id AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
FROM employee 
LEFT JOIN role ON employee.role_id = role.id 
LEFT JOIN department on role.department_id = department.id 
LEFT JOIN employee manager on manager.id = employee.manager_id;

--Add a new department
INSERT INTO departments (name_id) VALUES ('department');

-- Add a new role
INSERT INTO role(title, salary, department_id) VALUES ('role', 60000, 3);

-- Add a new employee
INSERT INTO employees (first_name, last_name, role.id, manager_id) VALUES ('Micheal', 'Jordan', 2, NULL);

-- Update an  employee role
UPDATE employee SET role role_id WHERE id = 3;
