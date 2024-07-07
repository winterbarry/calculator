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
      calcScreen.value = result;
    } 

    else {
      calcScreen.value = "Incomplete input";
    }
  }
};

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