const inquirer = require("inquirer");
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises")

const generateSVG = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like your svg to me?",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like your svg to be?"
        },
        {
            type: "input",
            name: "text",
            message: "What would you like the text to say, in your svg? (1-3 characters)"
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like your text to be?"
        }
    ]).then((res) => {
        console.log(res)
    })
}

generateSVG()