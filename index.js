const fs = require('fs');
const inquirer = require('inquirer');
const {departmentQuestions, roleQuestions, employeeQuestions, updateQuestios} = require('./questions');








function department() {
    prompt(departmentQuestions)
    .then({department})

};

function role() {

};

function employee() {
    
};

function updateEmployee() {

};