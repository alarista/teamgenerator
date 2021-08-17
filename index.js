const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const idArray = [];
const team = [];

function startApp() {
    function newManager() {
        console.log("Let's create your team");
        inquirer.prompt([
            {
                type: "input",
                name: "manName",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "manID",
                message: "What is the manager's id?", 
            },
            {
                type: "input",
                name: "manEmail",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "manOfficeNum",
                message: "What is the manager's office number?",
            }
        ]).then(data=>{
            const mgr = new Manager(data.manName, data.manID, data.manEmail, data.manOfficeNum);
            team.push(mgr);
            idArray.push(data.manID);
            createTeam();
        })
    }

    function createTeam(){
        inquirer.prompt([
            {
                type: "list",
                name: "newEmployeeType",
                message: "What is the employee role?",
                choices: [
                    "Intern",
                    "Engineer",
                    "I'm done"
                ]
            }
        ]).then(data => {
            switch (data.newEmployeeType) {
                case "Intern":
                    addIntern();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                default:
                    teamCreation();
            }
        });
    }
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engName",
                message: "Engineer name?",
            },
            {
                type: "input",
                name: "engID",
                message: "Engineer ID?",
            },
            {
                type: "input",
                name: "engMail",
                message: "Engineer mail?",
            },
            {
                type: "input",
                name: "engGit",
                message: "Engineer github?",
            }
        ]).then(data =>{
            const eng = new Engineer(data.engName, data.engID, data.engMail, data.engGit);
            team.push(eng);
            idArray.push(data.engID);
            createTeam();
        })
    }

    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "intName",
                message: "Intern name?",
            },
            {
                type: "input",
                name: "intID",
                message: "Intern ID?",
            },
            {
                type: "input",
                name: "intMail",
                message: "Intern mail?",
            },
            {
                type: "input",
                name: "intSchool",
                message: "Intern school?",
            }
        ]).then(data => {
            const int = new Intern(data.intName, data.intID, data.intMail, data.intSchool);
            team.push(int);
            idArray.push(data.intID);
            createTeam();
        });
    }

    function teamCreation(){
        if(!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(team), "utf-8");
    }
    newManager();
}
startApp();