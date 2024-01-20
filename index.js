//required variables for path to markdown, inquirer etc
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions =[
    { 
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    { 
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    { 
      type: 'input',
      name: 'project',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install dependencies?'
      
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does the user use the repository?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who should be credited for this work?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How would a user contribute to the project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How is a test run?',
    },

    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to apply?',
      choices: ["Apache","MIT","Boost", "Mozilla"],
    },

  ]


// Function to create a readme file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
  console.log("Creating the README...");
  writeToFile("README.md" , generateMarkdown({...inquirerResponses}))
  })
}

// Function call to initialize app
init();
