/* 
 * Select the display from the dom for later modification
 */ 
let display = document.querySelector(".display"); 

/*
 * Select all the buttons for adding event listeners to each
 */ 
let buttons = document.querySelectorAll("button"); 

/*
 * Stores the most recent return value
 */ 
let rtn = 0; 

/*
 * Mathematical functions section
 * Includes: add, subtract, multiply, and divide
 * Operation accepts 2 numbers and an operator and delegates to the other math functions based
 * on the operator provided
 */ 
function add(num1, num2) {
    rtn = num1 + num2; 
    return rtn; 
}

function subtract(num1, num2) {
    rtn = num1 - num2; 
    return rtn; 
}

function multiply(num1, num2) {
    rtn = num1 * num2; 
    return rtn; 
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Inconceivable!"; 
    }
    rtn = num1 / num2; 
    return rtn; 
}

function operation(num1, num2, operator) {
    switch(operator) {
        case "+": 
            return add(num1, num2); 
            break; 
        case "-": 
            return subtract(num1, num2); 
            break; 
        case "*": 
            return multiply(num1, num2); 
            break; 
        case "/": 
            return divide(num1, num2); 
            break;
        default: 
            return "Error"; 
            break;
    }
}