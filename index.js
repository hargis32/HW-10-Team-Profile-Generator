// importing employee classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// importing node modules
const inquirer = require('inquirer');
const fs = require('fs');


// empty array to push employees into
const teamArr = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Team Manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Manager ID #',
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Manager's email",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter Manager's office number",
        },
    ])
    .then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);

        teamArr.push(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's position?",
            choices: [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',   
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID #',
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's github username",
            when: (response) => response.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern currently attend?",
            when: (response) => response.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: "Do you want to add another employee?",
            default: false
        }
    ])
    .then(employeeInfo => {
        let {name, id, email, role, github, school, confirmNewEmployee} = employeeInfo;
        // create employee variable to be redefined based upon role selection
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        }
        else {
            employee = new Intern (name, id, email, school);
        }

        teamArr.push(employee);

        if (confirmNewEmployee) {
            return addEmployee(teamArr);
        }
        else {
            return teamArr;
        }
    })
};

addManager()
    .then(addEmployee);