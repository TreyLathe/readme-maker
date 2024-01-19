const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    { 
      type: 'input',
      name: 'Project:',
      message: 'What is the name of your project??',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Describe your project?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Do you have installation instructions?'
      
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What are the uses?',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who contributed to your project?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'How to to test?',
    },

    {
      type: 'list',
      name: 'License',
      message: 'Which license would you like to apply?',
      choices: ["license1","license2","license3", "license4"],
    },

  ])