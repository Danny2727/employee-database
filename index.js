const fs = require('fs');
const {prompt} = require('inquirer');
const mysql = require('mysql2');
const { questions, departmentQuestions, roleQuestions, employeeQuestions, updateQuestions } = require('./questions');

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

    db.query('SELECT  * FROM role', (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        addToDataBase();
    })

}

function viewEmployee() {

    db.query('SELECT  * FROM employee', (err, results) => {
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

function updateEmployee() {
    prompt(updateQuestions)
        .then(answers => {
            db.query('UPDATE employee SET role_id = ? WHERE id = ?', [answers.update, answers.newRole], (err, results) => {
                if (err) {
                    console.log(err);
                }
                console.table(results);
                addToDataBase();
            });

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