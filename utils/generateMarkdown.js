
//function creates a badge for the user's chosen license
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  const badgeURL = `https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg`;
  return `![License Badge](${badgeURL})`;}

//function creates a link to the chosen license, future work
// function renderLicenseLink(license) {
//   // Placeholder for license link; you might need to adjust this based on your application's requirements
//   if (!license || license === 'None') {
//     return '';
//   }
//   return `[License Link](#)`;
// }

//function to create the readme section for the license
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `
## License

${renderLicenseBadge(license)}  
This project is licensed under the ${license} license. 

  `;
}


// This is the function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  
  ${renderLicenseSection(data.license)}

  ### Description

    ${data.description}
  
  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Credits](#credits)
  - [Contact](#contact)

  ## Installation
  To install, run the following command:
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Contribute
    ${data.contribute}

  ## Credits
    ${data.credits}

  ## Contact
   Email: ${data.email}  
   GitHub: ${data.github}  

`;
}

module.exports = generateMarkdown;
