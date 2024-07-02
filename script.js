const add = (a, b) => a + b

const subtract = (a,b) => a - b

const multiply = (a,b) => a * b

const divide = (a,b) => a / b

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

let num1 = 10;
let operator = '/';
let num2 = 2;

let result = operate(operator, num1, num2);
if (result!== undefined) {
    console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
}
