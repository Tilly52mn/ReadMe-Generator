// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('You need to enter a project name!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'Provide a description of the project ',
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
      console.log('You need to enter a project description!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'installation',
  message: 'What needs to be installed ?',
  validate: installInput => {
    if (installInput) {
      return true;
    } else {
      console.log('You need to enter What needs to be installed !');
      return false;
    }
  }
},
{
  type: 'contribute',
  name: 'usage',
  message: 'Enter who contributed to your application.',
  validate: usageInput => {
    if (usageInput) {
      return true;
    } else {
      console.log('You need to enter who contributed to your application!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter the usage of your application.',
  validate: usageInput => {
    if (usageInput) {
      return true;
    } else {
      console.log('You need to enter the usage of your application!');
      return false;
    }
  }
},
{
  type: 'list',
  name: 'license',
  message: 'What license does the application have?',
  choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0'],
  default: false
},
{
  type: 'input',
  name: 'tests',
  message: 'Any tests of your application? If no type "no test", If yes please state and discribe them.',
  default: false,
  validate: testInput => {
    if (testInput) {
      return true;
    } else {
      console.log('You need to enter Any tests of your application!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'questions',
  message: 'What Email should people send thier questions?',
  validate: usageInput => {
    if (usageInput) {
      return true;
    } else {
      console.log('You need to enter an Email where should people send thier questions!');
      return false;
    }
  }
}];

// TODO: Create a function to write README file
function writeToFile(data) {  
  return new Promise((resolve, reject) => {
  fs.writeFile('../Test/README.md', data, err => {
    if (err) {
      reject(err);
      return;
    }

    resolve({
      ok: true,
      message: 'File created!'
    });
  });
});
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(data => {
    return generateMarkdown(data)
  })
    .then(readmeMarkdown => {
      console.log(readmeMarkdown)
      writeToFile(readmeMarkdown);
    })
}

// Function call to initialize app
init();
