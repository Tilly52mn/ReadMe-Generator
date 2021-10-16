// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  (https://www.gnu.org/licenses/gpl-3.0)
  (https://opensource.org/licenses/MIT)
  (https://opensource.org/licenses/MPL-2.0)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
