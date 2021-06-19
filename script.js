function add(num1, num2) {
    return num1 + num2; 
}

function subtract(num1, num2) {
    return num1 - num2; 
}

function multiply(num1, num2) {
    return num1 * num2; 
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot Divide By Zero"; 
    }
    return num1 / num2; 
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
