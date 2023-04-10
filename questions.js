const questions = [
    {
        type: 'list',
        name: 'companyInfo',
        message: 'What would you like to do with the company databse',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Role', 'Exit'],
        validate: (value) => { if (value) { return true } else { return `Please select what you would like to do with the databse.` } },
        
    }
]

const departmentQuestions = [
    {
        type: 'input',
        name: 'department',
        message: "What is the Departments name?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Departments name.` } },
    },
]

const roleQuestions = [
    {
        type: 'input',
        name: 'role',
        message: "What is the employees role?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Employees role.` } },
    },
    {
        type: 'input',
        name: 'salary',
        message: "What is the Employees salary?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Employees salary.` } },
    },
    {
        type: 'input',
        name: 'roleDepartment',
        message: "What is the Department for the employees role?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Department for the employees role.` } },
    },
]


const employeeQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the first name?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Employees first name.` } },
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the Employees last name?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Employees last name.` } },
    },
    {
        type: 'input',
        name: 'employeeRole',
        message: "What is the Employees role?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Employees role.` } },
    },
    {
        type: 'input',
        name: 'manager',
        message: "Who is the Employees manager?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Employees manager.` } },
    },
]

const updateQuestions = [
    {
        type: 'list',
        name: 'update',
        message: "Please select an employee to update the data base.",
        choices: [],
        validate: (value) => { if (value) { return true } else { return `Please select an Employee to update the data base.` } },
    },
    {
        type:'input',
        name:'newRole',
        message:'What is the employees new role.',
        validate: (value) => { if (value) { return true } else { return `Please update the employees new role.` } },

    }

]

module.exports = {questions,departmentQuestions, roleQuestions, employeeQuestions, updateQuestions };

