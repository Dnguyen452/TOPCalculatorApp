const buttons = document.querySelectorAll("button");
const input = document.getElementById("display");
const clear = document.getElementById("clear");
const clearLast = document.getElementById("clear-last");
const equals = document.getElementById("equals");

let firstNumber = "";
let secondNumber = "";
let operator = "";

// Helper function to determine if the value is a number
function isNumber(value) {
  return !isNaN(value) && !["+", "-", "*", "/", "%"].includes(value);
}

function insert(value) {
  // Check if the input is a number or an operator
  if (isNumber(value)) {
    // If the operator is empty, the value is the first number
    if (operator === "") {
      firstNumber += value;
      input.value = firstNumber;
    } else {
      // If the operator is not empty, the value is the second number
      secondNumber += value;
      input.value = secondNumber;
    }
  } else {
    // If the value is not a number, then it is an operator
    operator = value;
  }
}

// add event listener to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    insert(e.target.value);
  });
});

// add event listener to the clear button
clear.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  input.value = "";
});

// add event listener to the clearLast button
  clearLast.addEventListener("click", () => {
    if (operator == "") {
        firstNumber = firstNumber.slice(0, -1); // remove last character
        input.value = firstNumber; // display the new value
    } else {
        secondNumber = secondNumber.slice(0, -1);
        input.value = secondNumber;
    }
})

function add(a, b) {
  return Number(a) + Number(b); // return the result of the operation
}

function subtract(a, b) {
  return a - b;  // return the result of the operation
}

function multiply(a, b) {
  if (a == 0 || b == 0) {
    return 0;
  } else 
  return a * b;  // return the result of the operation
}

function divide(a, b) {
  if (b == 0) {
    return "Error";
  } else 
  return a / b;  // return the result of the operation
}

// function for calculating the result of the operation 
function calculate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    } else {
        return "Error";
    }
}

// add event listener to the equals button 
equals.addEventListener("click", () => {
    let result = calculate(operator, firstNumber, secondNumber);
    input.value = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
} )

// function for displaying results in the input field
function displayResult(result) {
  input.value = result;
  return result;
}

// function for clearing the input field
function clearInput() {
  input.value = "";
}


// Path: index.html
