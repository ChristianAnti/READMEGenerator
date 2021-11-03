// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
// const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
    {   
        message: "What was your motivation?",
        name: "title"
    },
    {   
        message: "Why did you build this project?",
        name: "project"
    },
    {   
        message: "What problem does it solve?",
        name: "solve"
    },
    {   
        message: "What did you learn?",
        name: "learn"
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {

    var outputString = "";
    questions.forEach(question => {
       // (The key of the answer is the name property of the question object: https://www.npmjs.com/package/inquirer#answers)
       var answer = data[question.name];       
        outputString += question.message; 
        outputString += '\n'; 
        outputString += answer; 
        outputString += '\n'; 
    });

    // we have the string containing the full questions and answers, now write it into the file
    fs.writeFile(fileName, outputString, function (err) {
        // handle/log errors during writing the file
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // pass the answers to the function that is actually going to print them into a file
        writeToFile("HOMEWORK.md", answers);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
