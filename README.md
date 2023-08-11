# SVG Logo Generator
 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)

## Description

The project aims is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file]. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.


## Technologies

- JavaScript (Client-side web development)
- Node.js (A runtime environment and server-side web development platform for JavaScript)
- Inquirer (Node.js library)
- Jest (JavaScript testing framework)
- NPM (Node Package Manager for Node.js)


## Installation

In order to be able to run the applicaton, you are required to do the following:

- Install Nodjs on your computer by downloading it from their website here, https://nodejs.org/en.
- If you are not sure how to install it. Click here for the instruction, https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs.
- Install the VS Code extension to be able to preview SVG files. [Click here to download](https://marketplace.visualstudio.com/items?itemName=jock.svg)
- Download/ clone the GitHub repo 
- Install npm (Node Package Manager) inside the repo by typing the following code in the command line:
```bash
 $ npm install
 ```


## Usage

To use the application,
- To run the application, type the following code in the command line:
```bash
 $ npm start or node index.js
 ```
- Answer all the questions to generate a shape
- Your generated shape will be named logo.svg and located in the examples folder
- Locate the logo.svg file and right-click on it. Then click on "Open Preview"
- Watch the demonstration video by [clicking the link here.](https://drive.google.com/file/d/1_6Lt4yGndc39o7UN_WZkwnknZAzETy7g/view)


Preview Generated SVG Logos:
![Generated SVG Logo](./examples/logo.svg)
* [Click here for Circle logo](./examples/circle-logo.svg)
* [Click here for Square logo](./examples/square-logo.svg)
* [Click here for Triangle logo](./examples/triangle-logo.svg)


## License

This project is under the MIT License. [Click here for more information](https://opensource.org/licenses/MIT).


## Tests

To run the tests, type the following code in the command line:
```bash
 $ npm run test
 ```