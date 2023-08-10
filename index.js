// Imported packages and modules needed for this application
const inquirer = require("inquirer");
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

// An array of questions for user input
const generateSVG = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like your svg to be?",
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
    ])
        // Output the user's response object for debugging purposes
        .then((res) => {
            console.log(res);

            // Declare a variable to store the SVG shape object
            let svgShape;

            // Create a new Circle shape object if the user input is "Circle"
            if (res.shape === "Circle") {
                svgShape = new Circle();
            }
            // Create a new Triangle shape object if the user input is "Triangle"
            if (res.shape === "Triangle") {
                svgShape = new Triangle();
            }
            // Create a new Square shape object if the user input is "Square"
            if (res.shape === "Square") {
                svgShape = new Square();
            }
            // Set the color of the shape object based on the user input
            svgShape.setColor(res.shapeColor)

            // Create a function to generates svg file and to save it in the examples folder
            const svg = new SVG();
            svg.setText(res.text, res.textColor);
            svg.setShape(svgShape);
            return writeFile("./examples/logo.svg", svg.render());
        }).then(() => {
            console.log("Your SVG logo has been successfully generated as a logo.svg in examples folder");
        })
};

// Function call to generates SVG file
generateSVG();