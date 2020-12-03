const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const markDownGenerator = require("./markDownGenerator");

//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
    { type: "input",
      name: "title",
      message: "what's the title of your project?"
    },

    {
     type: "list",
     name: "license",
     message: "what kind of license does your project have?",
     choices: ["apache", "eclipse", "PostgreSQL", "none"]
    },

    {
    type: "input",
    name: "description",
    message: "please describe your project."
    },

    {
    type: "input",
    name: "installation",
    message: "what command do I need to run to install dependancies?",
    default: "npm i"
    },

    {
    type: "input",
    name: "usage",
    message: "what does the user need to know about using this repository?"
    },

    {
    type: "input",
    name: "contributing",
    message: "what does the user need to know about contributing to this repository?"
    },

    {
    type: "input",
    name: "test",
    message: "what command should the user run to run the test?",
    default: "npm test"
    },

    {
    type: "input",
    name: "email",
    message: "what is your email?"
    },

    {
    type: "input",
    name: "github",
    message: "what is your GitHub username?"
    },

]

function createFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

function startGenerator(){
    inquirer.prompt(questions).then((responses)=> {
        createFile("README.md", markDownGenerator({
            ...responses
        }))
    })

}

startGenerator()