const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require ("./generate-readme")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      message: 'Give a short description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How to install?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How to use the application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Do you have any cotributors?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'How to test the app?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((data) => {
    // const filename = `${data.username.toLowerCase().split(' ').join('')}.json`;

     const readme = generateReadme (data)

    fs.writeFile("./README.md", readme, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
