var licenseBadge = ''
var licenseLink = ''
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'No License':
      licenseBadge = ''
      break;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'GNU GPLv3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'No License':
      licenseLink = ''
      break;
    case 'MIT':
      licenseLink = '(https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPLv3':
      licenseLink = '(https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = '(https://opensource.org/licenses/MPL-2.0)'
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  if (license ==='No License'){
    return ''
  }
  return `
  ## License<br/>Licensed under the [${license}]${licenseLink} license.`
  
}
function renderQuestions(questions){

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.license)
  return `# ${data.title}
${licenseBadge}
## Table of Contents

[Description](#Description)<br/>
[Installation](#Installation)<br/>
[Usage](#Usage)<br/>
[Contributing](#Contributing)<br/>
[Tests](#Tests)<br/>
[Questions](#Questions)<br/>

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
Email any questions to ${data.questionsEmail} 
GitHub Profile [${data.questionsGitHub}](github.com/${data.questionsGitHub})
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
