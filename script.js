const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (num2 === 0) {
    return "Cannot divide by 0"
  } else {
    return num1 / num2
  }
}

function operate(operator, num1, num2) {
    let result;

    switch (operator) {
        case "+":
            result =  add(num1, num2)
            break;
        case "-":
            result = subtract(num1, num2)
            break;
        case "*":
            result = multiply(num1, num2)
            break;
        case "/":
            result = divide(num1, num2)
            break;
    }

    return result;
}

let num1 = "";        
let operator = "";   
let num2 = "";       

const calcScreen = document.querySelector(".calc-screen"); 
const numbers = document.querySelectorAll(".number");
const opSigns = document.querySelectorAll(".operator");
const equalTo = document.querySelector(".equal-sign");
const clear = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

const updateScreen = (value, type) => {

  if (type === "number") {

    if (!operator) {
      num1 += value;
      calcScreen.value = num1;
    }

    else {
      num2 += value;

      calcScreen.value = num1 + " " + operator + " " + num2;
    }
  }
  
  else if (type === "operator") {

    if (num1 !== "") {
      operator = value; 

      calcScreen.value = num1 + " " + operator + " ";
    }
  } 

  else if (type === "equal") {

    if (num1 !== "" && num2 !== "" && operator !== "") { 
      const result = operate(operator, parseFloat(num1), parseFloat(num2));
      roundedResult = result.toFixed(3)
      calcScreen.value = roundedResult;
      num1 = roundedResult.toString(); 
      num2 = ""; 
      operator = ""; 
    } 

    else {
      calcScreen.value = "Incomplete input";
    }
  }
  
  else if (type === "clear") {
    calcScreen.value = "";
    num1 = "";
    num2 = "";
    operator = "";
  }

  else if (type === "decimal") {
    if (!operator) {

      if (!num1.includes(".")) {
        num1 += value;
        calcScreen.value = num1;
      }
    } else {

      if (!num2.includes(".")) {
        num2 += value;
        calcScreen.value = num1 + " " + operator + " " + num2;
      } 
    }
  }
}  

numbers.forEach(number => { 
  number.addEventListener("click", () => {
    updateScreen(number.textContent, "number"); 
  }); 
});

opSigns.forEach(opSign => {
  opSign.addEventListener("click", () => {
    updateScreen(opSign.textContent, "operator"); 
  });
});

equalTo.addEventListener("click", () => {
  updateScreen(null, "equal"); 
});

clear.addEventListener("click", () => {
  updateScreen(null, "clear");
});

decimal.addEventListener("click", () => {
  updateScreen(decimal.textContent, "decimal");
});