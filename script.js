/* 
 * Select the display from the dom for later modification
 */ 
let display = document.querySelector(".display"); 

/*
 * Select all the buttons for adding event listeners to each
 */ 
let buttons = document.querySelectorAll("button"); 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      keyPress(button.id); 
    });
  });

/*
 * Stores numbers and operations
 */ 
let firstNum = ''; 
let secondNum = ''; 
let operator = ''; 

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

/*
 * Accepts the two numbers to be calculated and the operator. Calls the appropriate
 * mathematical function based on the operator given
 */
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

/*
 * Clear and delete key functionality
 */

function clear() {
    display.textContent = ''; 
    firstNum = ''; 
    secondNum = ''; 
    operator = ''; 
    rtn = 0; 
}

function backspace() {
    display.textContent = display.textContent.toString().slice(0, -1); 
}

/*
 * Stores the current display value as firstNum. This supports chaining calculations
 */
function storeNum() {
    firstNum = Number(display.textContent); 
    display.textContent = ''; 
}

/*
 * Rounds results to the hundreths place 
 */
function round(num) {
    return Math.round(num * 100) / 100; ; 
}

/*
 * Checks if there is already a "." and adds one if not
 */
function dot() {
    let test = display.textContent.toString(); 
    test.split(); 
    for (let i = 0; i < test.length; i++) {
        if ("." === test[i]) {
            return; 
        }
    }
    display.textContent += "."; 
}

/**
 * Main function
 * - Called by clicking any button on the calculator
 * - Parses those clicks into action
 */
function keyPress(key) {
    if (key === '=') {
        secondNum = Number(display.textContent); 
        display.textContent = round(operation(firstNum, secondNum, operator)); 
    }
    if (key === 'D') {
        backspace(); 
        return;  
    }
    if (key === 'C') {
        clear(); 
        return;  
    }
    if (key === 'dot') {
        dot(); 
    }
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        storeNum(); 
        operator = key; 
        return; 
    }
    if (0 <= key && key <= 9) {
        display.textContent = display.textContent + key; 
    }
} 