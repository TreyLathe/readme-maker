// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  
    ${data.license}

  ### Description

    ${data.description}

  ### Table of Contents
  *Installation
  *Usage
  *Contribute
  *Contact

  ## Installation
  To install, run the following command:
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Contribute
    ${data.contribute}

  ## Contact
   Email: ${data.email}
   GitHub: ${data.github}

`;
}

module.exports = generateMarkdown;
