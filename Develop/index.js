// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)',
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
    message: 'Provide a description of the project (Required)',
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
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage of your application. (Required)',
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
    name: 'feature',
    message: 'What license does the application have?',
    choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0'],
    default: false
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Any tests of your application? If no type "no test", If yes please state and discribe them.',
    default: false
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Where should people send thier questions?',    
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('You need to enter Where should people send thier questions!');
        return false;
      }
    }
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
  return new Promise((resolve, reject) => {
  fs.writeFile('./'+fileName+'.html', data, err => {
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
  inquirer.prompt(questions).then((data) => console.log(data)); 

}

// Function call to initialize app
init();
