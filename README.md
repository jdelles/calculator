# calculator
A calculator created with JavaScript, HTML, and CSS


From [The Odin Project](https://www.theodinproject.com)  
[Play Here](https://jdelles.github.io/calculator/)

## Introduction
This is the final "Foundations" project at The Odin Project. I began Foundations thinking I'd breeze through it and complete the entire Odin Project curriculum during a single #100DaysOfCode challenge. But I begin this on day 51 - still in the Foundations section! The resources have been great and my understanding of JavaScript, DOM manipulation, and CSS have greatly improved. 

This project is a simple calculator coded from scratch in JavaScript. 

## Skill to be demonstrated
- JavaScript
- CSS
- HTML

## Tools used
- VSCode
- Live Server
- Git / GitHub

## To do 
- [X] Create JavaScript functions for add, subtract, multiple and divide (Much of this work was done in JS Foundations 5 - Calculator.js)
- [X] Create function operate that takes an operator and two numbers then calls one of the primary mathematical functions based on the operator provided 
- [X] Create a basic HTML calculator with buttons for each digit, each operator, equals and clear. 
- [X] Create the function that populates the display value when numbers are clicked. The display value should be stored for use later. 
- [X] Make the calculator work. The first display value must be stored when an operation key is pressed, then the second value is stored when = key is pressed. Flow:   user enters number, user pressed operation (+,-,*,/), user enters second number, user presses equals, result is displayed. Result is stored as first value. If the user presses an operation value they can conduct another operation on the result. 
- [X] Test for bugs!  This is a straight up calculator - no PEDMAS. num operator num equals. Round decimals so they fit on screen. Watch workflow bugs in pressing keys out of flow order. Clear should clear all values and completely reset the calculator. Watch for division by zero and handle it. 
- [X] Extra Credit: Make the calculator function with floating point numbers. Add a "." key and make sure it can only be pressed once for each input value. 
- [X] Extra Credit: Add a backspace button so the user can delete the last number entered.
- [ ] Extra Credit: Add keyboard support. 
- [ ] Extra Extra Credit: Add negative / positive sign and consider adding further functionality for scientific calculating
- [X] Publish to GitHub

## Known Bugs
- Any number greater than 14 digits in length 'breaks' the display. Possible solutions, only allow 14 digit entries. What about >14 digit results. Could convert to scientific notation. Could display an error. 