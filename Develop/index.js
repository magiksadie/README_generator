const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please provide usage instructions for your project.'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'projectContributing',
        message: 'Please provide instructions for contributing to your project.'
    },
    {
        type: 'input',
        name: 'projectTests',
        message: 'Please provide instructions for running tests for your project.'
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'Please provide your Github username.'
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'Please provide your email address for contact.'
    }
];

function writeToFile(fileName, data) {
    var readMe = markdown(data);
    fs.writeFile(fileName, readMe, (err) => {
        if (err) {
            console.log(err);
        }
    })
};

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('generated_README.md', answers);
    })
    .catch(error => {
        if (error) {
            console.log(error);
        }
    })
};

init();
