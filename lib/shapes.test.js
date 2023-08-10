// Import modules needed for this test file
const { Circle, Triangle, Square } = require("./shapes");
const SVG = require("./svg");

//  Circle shape with different colors
// Define a test suite with a description "Circle"
describe("Circle", () => {
    // Define a test case with a description "Creates a new circle object that is blue"
    test("Creates a new circle object that is blue", () => {
        // Define the expected SVG markup
        const expected = `<circle cx="150" cy="100" r="80" fill="blue" />`;

        // Create a new instance of the "Circle" class
        const circle = new Circle();
        // Set the color of the circle object to "blue"
        circle.setColor("blue");

        // Render the circle object to generate an SVG circle element string
        const output = circle.render();
        // Use the testing framework's "expect" function to compare the rendered output with the expected string
        // Check if the rendered output matches the expected SVG circle element
        expect(output).toEqual(expected);
    });
    // Define a test case with a description "Creates a new circle object that is orange"
    test("Creates a new circle object that is orange", () => {
        // Define the expected SVG markup
        const expected = `<circle cx="150" cy="100" r="80" fill="orange" />`;

        // Creates a new instance of the "Circle" class
        const circle = new Circle();
        // Set the color of the circle object to "orange"
        circle.setColor("orange");

        // Render the circle object to generate an SVG circle element string
        const output = circle.render();
        // Use the testing framework's "expect" function to compare the rendered output with the expected string
        // Check if the rendered output matches the expected SVG circle element
        expect(output).toEqual(expected);
    });
});

// Triangle shape with different colors
// Define a test suite with a description "Triangle"
describe("Triangle", () => {
    // Define a test case with a description "Creates a new triangle object that is red"
    test("Creates a new triangle object that is red", () => {
        // Define the expected SVG markup
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`;

        // Creates a new instance of the "Triangle" class
        const triangle = new Triangle();
        // Set the color of the "Triangle" to "red"
        triangle.setColor("red");

        // Render the triangle object to generate an SVG triangle element string
        const output = triangle.render();
        // Use the testing framework's "expect" function to compare the rendered output with the expected string
        // Check if the rendered output matches the expected SVG triangle element
        expect(output).toEqual(expected);
    });
    // Define a test case with a description "Creates a new triangle object that is blue"
    test("Creates a new triangle object that is blue", () => {
        // Define the expected SVG markup
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;

        // Creates a new instance of the "Triangle" class
        const triangle = new Triangle();
        // Sets the color of the "Triangle" to blue
        triangle.setColor("blue");

        // Render the triangle object to generate an SVG triangle element string
        const output = triangle.render();
        // Use the testing framework's "expect" function to compare the rendered output with the expected string
        // Check if the rendered output matches the expected SVG triangle element
        expect(output).toEqual(expected);
    });
});

// Square shape with different colors
// Define a test suite with a description "Square"
describe("Square", () => {
    // Define a test case with a description "Creates a new Square object that is purple"
    test("Creates a new square object that is purple", () => {
    // Defines a test case with a description "Creates a new Square object that is purple"
        const expected = `<rect x="90" y="40" width="120" height="120" fill="purple" />`;

        // Creates a new instance of the "Square" class
        const square = new Square();
        // Sets the color of the "Square" to purple
        square.setColor("purple");

        // Render the square object to generate an SVG square element string
        const output = square.render();
        // Use the testing framework's "expect" function to compare the rendered output with the expected string
        // Check if the rendered output matches the expected SVG square element
        expect(output).toEqual(expected);
    });
    // Define a test case with a description "Creates a new Square object that is green"
    test("Creates a new square object that is green", () => {
        // Define the expected SVG markup
        const expected = `<rect x="90" y="40" width="120" height="120" fill="green" />`;

        // Creates a new instance of the "Square" class
        const square = new Square();
        // Sets the color of the "Square" to "green"
        square.setColor("green");

        // Render the square object to generate an SVG square element string
        const output = square.render();
        // Use the testing framework's "expect" function to compare the rendered output with the expected string
        // Check if the rendered output matches the expected SVG square element
        expect(output).toEqual(expected);
    });
});

// Square shape and text with different colors for SVG file
// Defines a test suite named "Blue-Square-Red-ABC"
describe("Blue-Square-Red-ABC", () => {
    // Defines a test case within the test suite
    test("Creates a new square object that is blue, with red text that says ABC", () => {
        // Defines the expected SVG markup
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="Blue" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="Red">ABC</text></svg>`;
        
        // Creates a new Square object
        const shape = new Square();
        // Sets the color of the square to "BLue"
        shape.setColor("Blue");
        
        // Creates a new SVG Ojbect
        const svg = new SVG();
        // Sets the text content to "ABC" with text color "Red"
        svg.setText("ABC", "Red");
        // Sets the shape of the SVG to the created Square object
        svg.setShape(shape);

        // Render the SVG markup
        const output = svg.render();
        // Assert that the rendered SVG matches the expected SVG markup
        expect(output).toEqual(expected);
    });
});

// Triangle shape and text with different colors for SVG file
// Defines a test suite named "Gold-Triangle-White-123"
describe("Gold-Triangle-White-123", () => {
    // Defines a test case within the test suite
    test("Creates a new triangle object that is gold, with white text that says 123", () => {
        // Defines the expected SVG markup
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="Gold" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="White">123</text></svg>`;
        
        // Creates a new Triangle Object
        const shape = new Triangle();
        // Sets the color of the Triangle to "Gold"
        shape.setColor("Gold");

        // Creates a new SVG Ojbect
        const svg = new SVG();
        // Sets the text content to "123" with text color "White"
        svg.setText("123", "White");
        // Sets the shape of the SVG to the created Triangle object
        svg.setShape(shape);

        // Render the SVG markup
        const output = svg.render();
        // Assert that the rendered SVG matches the expected SVG markup
        expect(output).toEqual(expected);
    });
});

// Circle shape and text with different colors for SVG file
// Defines a test suite named "Green-Circle-Yellow-SVG"
describe("Green-Circle-Yellow-SVG", () => {
    // Defines a test case within the test suite
    test("Creates a new circle object that is green, with yellow text that says SVG", () => {
        // Defines the expected SVG markup
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="Green" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="Yellow">SVG</text></svg>`;
       
       // Creates a new Circle Object
        const shape = new Circle();
        // Sets the color of the Circle to "Green"
        shape.setColor("Green");
        
        // Creates a new SVG Ojbect
        const svg = new SVG();
        // Sets the text content to "SVG" with text color "Yellow"
        svg.setText("SVG", "Yellow");
        // Sets the shape of the SVG to the created Circle object
        svg.setShape(shape);

        // Render the SVG markup
        const output = svg.render();
        // Assert that the rendered SVG matches the expected SVG markup
        expect(output).toEqual(expected);
    });
});



