-- GET all departments
SELECT id, name_id FROM department;

--Get all roles with the departments information
SELECT role_id, role.title, role.salary, department.name_id AS department
FROM role
INNER JOIN department ON role.department_id = department.name_id;


-- Get all employees with the role and manger information
-- SELECT employee_id, employee.first_name, employee.last_name, role.title, role.salary, role.deperment_id AS role
-- FROM employee
-- INNER JOIN role ON employee.role_id = department_id
-- INNER JOIN department ON role.department_id = department.id
-- LEFT JOIN employee ON employee.manager_id = id;

--Add a new department
INSERT INTO departments (name_id) VALUES ('department');

-- Add a new role
INSERT INTO role(title, salary, department_id) VALUES ('role', 60000, 3);

-- Add a new employee
INSERT INTO employees (first_name, last_name, role.id, manager_id) VALUES ('Micheal', 'Jordan', 2, NULL);

-- Update an  employee role
UPDATE employee SET role role_id WHERE id = 3;
