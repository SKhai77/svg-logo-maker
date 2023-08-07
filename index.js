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
        let svgShape;
        if(res.shape === "Circle") {
            svgShape = new Circle()
        }
        if(res.shape === "Triangle") {
            svgShape = new Triangle()
        }
        if(res.shape === "Square") {
            svgShape = new Square()
        }
        svgShape.setColor(res.shapeColor)

        const svg = new SVG()
        svg.setText(res.text, res.textColor)
        svg.setShape(svgShape)
        return writeFile("logo.svg", svg.render())
    }).then(() => {
        console.log("Generated logo.svg")
    })
}

generateSVG()