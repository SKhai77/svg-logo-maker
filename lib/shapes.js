class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {

    }
}

class Triangle extends Shape {
    render() {
        
    }
}

class Square extends Shape {
    render() {
        
    }
}

module.exports = {Circle, Triangle, Square}