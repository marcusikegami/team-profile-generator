const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];
//

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the Team Mangager's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Team Mangager's employee ID?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Team Mangager's email?"
        },
        {
            type: 'text',
            name: 'officeNum',
            message: "What is the Team Mangager's office number?"
        }
    ]).then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNum);
    teamMembers.push(manager);
    promptUser();
})
}

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'memberRole',
            message: 'Select a team member type to add',
            choices: ['Engineer', 'Intern', 'Finished adding team members']
        }
    ]).then(data => {
        console.log(teamMembers);
        switch(data.memberRole) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            default:
                generateHTML();
        }
    })
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamMembers.push(engineer);
        promptUser();
    })
}

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What school does the intern attend?"
        }
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.github);
        teamMembers.push(intern);
        promptUser();
    })
}

function generateHTML() {
    teamMembers.forEach(member => {
        console.log(member);
    })
};

managerPrompt()

