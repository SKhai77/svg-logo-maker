const { Circle, Triangle, Square } = require("./shapes");
const SVG = require("./svg")

// Shapes
describe("Circle", () => {
    test("Creates a new circle object that is blue", () => {
        const expected = `<circle cx="150" cy="100" r="80" fill="blue" />`;
        const circle = new Circle()
        circle.setColor("blue")
        const output = circle.render()
        expect(output).toEqual(expected)
    });

    test("Creates a new circle object that is orange", () => {
        const expected = `<circle cx="150" cy="100" r="80" fill="orange" />`;
        const circle = new Circle()
        circle.setColor("orange")
        const output = circle.render()
        expect(output).toEqual(expected)
    });
});

describe("Triangle", () => {
    test("Creates a new triangle object that is red", () => {
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`;
        const triangle = new Triangle()
        triangle.setColor("red")
        const output = triangle.render()
        expect(output).toEqual(expected)
    });

    test("Creates a new triangle object that is blue", () => {
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
        const triangle = new Triangle()
        triangle.setColor("blue")
        const output = triangle.render()
        expect(output).toEqual(expected)
    });
});

describe("Square", () => {
    test("Creates a new square object that is purple", () => {
        const expected = `<rect x="90" y="40" width="120" height="120" fill="purple" />`;
        const square = new Square()
        square.setColor("purple")
        const output = square.render()
        expect(output).toEqual(expected)
    });
    test("Creates a new square object that is green", () => {
        const expected = `<rect x="90" y="40" width="120" height="120" fill="green" />`;
        const square = new Square()
        square.setColor("green")
        const output = square.render()
        expect(output).toEqual(expected)
    });
});

// SVG
describe("Blue-Square-Red-ABC", () => {
    test("Creates a new square object that is blue, with red text that says ABC", () => {
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="Blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">ABC</text></svg>`;
        const shape = new Square()
        shape.setColor("Blue")
        const svg = new SVG()
        svg.setText("ABC", "Red")
        svg.setShape(shape)
        const output = svg.render()
        expect(output).toEqual(expected)
    });
});

describe("Gold-Triangle-White-123", () => {
    test("Creates a new triangle object that is gold, with white text that says 123", () => {
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="Gold" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="White">123</text></svg>`;
        const shape = new Triangle()
        shape.setColor("Gold")
        const svg = new SVG()
        svg.setText("123", "White")
        svg.setShape(shape)
        const output = svg.render()
        expect(output).toEqual(expected)
    });
});

describe("Green-Circle-Yellow-SVG", () => {
    test("Creates a new circle object that is green, with yellow text that says SVG", () => {
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="Green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Yellow">SVG</text></svg>`;
        const shape = new Circle()
        shape.setColor("Green")
        const svg = new SVG()
        svg.setText("SVG", "Yellow")
        svg.setShape(shape)
        const output = svg.render()
        expect(output).toEqual(expected)
    });
});



