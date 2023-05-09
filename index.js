const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/markdownGen');

const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Put your project's usage and examples here:"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter the description for your project:',
        choices: ["MIT", "GPLv2", "Apache", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3", "none"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List any developers you collaborated with on this project and provide a link to their gitHub:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter instructions for how to run tests for your project:'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your gitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What do you want your README file to be called?'
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(data), (err) => {
        err ? console.log(err) : console.log("Success!!!")
    });
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile(answers.fileName, answers)
    });
};


init();