// Define a class name SVG
class SVG {
    // Constructor method that sets empty string as the value will be added by users
    constructor() {
        this.text = ""; 
        this.shape = "";
    }

        // Method defined within the class to render an SVG string
        render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    // Method defined within the class to set the text element of the SVG
    setText(textValue, textColor) {
        // Check if the provided text length is greater than 3 characters
        if(textValue.length > 3) {
            // Throw an error if the text is more than 3 characters long
            throw new Error("Please enter 1-3 characters!");
        }
        // Set the 'text' property with an SVG <text> element containing the provided text and color
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textValue}</text>`
    }
    // Method to set the shape element of the SVG
    setShape(shapeValue) {
        // Call the 'render' method of the provided shape object and set the 'shape' property
        this.shape = shapeValue.render();
    }
};

// Exports the SVG class to be used in other (index.js) modules
module.exports = SVG;