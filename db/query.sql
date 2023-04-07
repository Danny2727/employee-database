SELECT role_id, role.title, role.salary, department.name_id AS department
FROM role;
LEFT JOIN department
ON role.department_id = department.name_id;

-- Working on Adding Title, Department, and Salary 
-- SELECT employee_id, employee.first_name, employee.last_name, role.department_id
-- FROM employee
-- LEFT JOIN role
-- ON employee.role_id = role.department_id
