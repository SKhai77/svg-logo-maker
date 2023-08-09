// Define a class name Shape
class Shape {
    // Constructor method that sets empty string for the color as the value will be added by users
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
};
// Define a class named 'Circle' that extends the 'Shape' class
class Circle extends Shape {
    // Define a method called "render" for the 'Circle' class
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
};
// Define a class named 'Triangle' that extends the 'Shape' class
class Triangle extends Shape {
    // Define a method called "render" for the 'Triangle' class
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`  
    }
};
// Define a class named 'Square' that extends the 'Shape' class
class Square extends Shape {
    // Define a method called "render" for the 'Square' class
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
};
// Exports the Circle, Triangle, and Square classes to be used in other(index.js) modules
module.exports = {Circle, Triangle, Square}