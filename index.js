const fs = require('fs');
const { prompt } = require('inquirer');
const mysql = require('mysql2');
const { questions, departmentQuestions, roleQuestions, employeeQuestions} = require('./questions');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'department_db'
    },
    console.log(`Connected to the department_db database.`)
);

const utils = require('util')
db.query = utils.promisify(db.query)

function viewDepartment() {

    db.query('SELECT  * FROM department', (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        addToDataBase();
    })


}

function viewRole() {

    db.query('SELECT role.id, role.title, role.salary, department.name_id AS department FROM role INNER JOIN department ON role.department_id = department.id;', (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        addToDataBase();
    })

}

function viewEmployee() {

    db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name_id AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        addToDataBase();
    })


}

function department() {
    prompt(departmentQuestions)
        .then(answers => {
            db.query('INSERT INTO department (name_id) VALUES (?)', answers.department, (err, results) => {
                if (err) {
                    console.log(err);
                }
                console.table(results);
                addToDataBase();
            })
        })

};

function role() {
    prompt(roleQuestions)
        .then(answers => {
            db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [answers.role, answers.salary, answers.roleDepartment], (err, results) => {
                if (err) {
                    console.log(err);
                }
                console.table(results);
                addToDataBase();
            });

        })

};

function employee() {
    prompt(employeeQuestions)
        .then(answers => {
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [answers.firstName, answers.lastName, answers.employeeRole, answers.manager], (err, results) => {
                if (err) {
                    console.log(err);
                }
                console.table(results);
                addToDataBase();
            });

        })

};

async function updateEmployee() {
    const roles = await db.query('SELECT id as value, title as name FROM role')
    db.query('SELECT id as value, concat(first_name, " ", last_name) as name FROM employee')
        .then((employees, err) => {
            prompt([
                {
                    type: 'list',
                    name: 'update',
                    message: "Please select an employee to update the data base.",
                    choices: employees,
                    validate: (value) => { if (value) { return true } else { return `Please select an Employee to update the data base.` } },
                },
                {
                    type:'list',
                    name:'newRole',
                    message:'What is the employees new role.',
                    choices: roles,
                    validate: (value) => { if (value) { return true } else { return `Please update the employees new role.` } },
            
                }
            ])
            //const newArr = employees.map(...);
            //Map through employees and return an objet with name and value { name: employee.first_name, value: employee.id }
            //updateQuestions[0].choices = newArr (//pass that new array from the .map and feed it into updateQuestions)
                .then(answers => {
                    db.query('UPDATE employee SET role_id = ? WHERE id = ?', [answers.newRole, answers.update], (err, results) => {
                        if (err) {
                            console.log(err);
                        }
                        console.table(results);
                        addToDataBase();
                    });

                })
        })

};

//old
function addToDataBase() {
    prompt(questions)
        .then(({ companyInfo }) => {
            if (companyInfo === "View Departments") {
                viewDepartment()
            }
            else if (companyInfo === "View Roles") {
                viewRole()
            } else if (companyInfo === "View Employees") {
                viewEmployee()
            }
            else if (companyInfo === 'Add Department') {
                department()
            }
            else if (companyInfo === 'Add Role') {
                role()
            }
            else if (companyInfo === 'Add Employee') {
                employee()
            }
            else if (companyInfo === 'Update Role') {
                updateEmployee()
            } else if (companyInfo === 'Exit') {
                process.exit()
            }
        })

}

addToDataBase()

//new
// async function addToDataBase() {
//     const { companyInfo } = await prompt(questions)
//     if (companyInfo === 'Add Department') department()
//     else if (companyInfo === 'Add Role') role()
//     else if (companyInfo === 'Add Employee') employee()
//     else if (companyInfo === 'Update Role') updateEmployee()

// }