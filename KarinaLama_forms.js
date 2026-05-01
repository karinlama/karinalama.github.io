// KarinaLama_forms.js
// CMPSC 3323 - HTML Forms Assignment

function getNumber(inputId) {
    return parseFloat(document.getElementById(inputId).value);
}

function calculateFactorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

function calculateFibonacci(number) {
    if (number === 0) {
        return 0;
    }

    if (number === 1) {
        return 1;
    }

    let previous = 0;
    let current = 1;

    for (let i = 2; i <= number; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    return current;
}

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculatorForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const firstNumber = getNumber("calcNum1");
        const secondNumber = getNumber("calcNum2");
        const selectedOperator = document.querySelector('input[name="operator"]:checked').value;
        let result;
        let operatorSymbol;

        if (selectedOperator === "add") {
            result = firstNumber + secondNumber;
            operatorSymbol = "+";
        } else if (selectedOperator === "subtract") {
            result = firstNumber - secondNumber;
            operatorSymbol = "-";
        } else if (selectedOperator === "multiply") {
            result = firstNumber * secondNumber;
            operatorSymbol = "x";
        } else if (selectedOperator === "divide") {
            if (secondNumber === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = firstNumber / secondNumber;
            operatorSymbol = "/";
        }

        alert(firstNumber + " " + operatorSymbol + " " + secondNumber + " = " + result);
    });

    document.getElementById("factorialForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const number = parseInt(document.getElementById("factorialNumber").value, 10);

        if (number < 0 || !Number.isInteger(number)) {
            alert("Please enter a non-negative integer.");
            return;
        }

        alert(number + "! = " + calculateFactorial(number));
    });

    document.getElementById("fibonacciForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const number = parseInt(document.getElementById("fibonacciNumber").value, 10);

        if (number < 0 || !Number.isInteger(number)) {
            alert("Please enter a non-negative integer.");
            return;
        }

        alert("The " + number + "th Fibonacci number is " + calculateFibonacci(number));
    });

    document.getElementById("rangeForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const firstNumber = getNumber("rangeNum1");
        const secondNumber = getNumber("rangeNum2");
        const thirdNumber = getNumber("rangeNum3");
        const numbers = [firstNumber, secondNumber, thirdNumber];
        const maximum = Math.max(...numbers);
        const minimum = Math.min(...numbers);
        const range = maximum - minimum;

        alert("Maximum: " + maximum + "\nMinimum: " + minimum + "\nRange: " + range);
    });

    document.getElementById("mailingListForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const zipCode = document.getElementById("zipCode").value;

        const outputString =
            '<div class="signup-entry">' +
            '<strong>Name:</strong> ' + firstName + ' ' + lastName + '<br>' +
            '<strong>Email:</strong> ' + email + '<br>' +
            '<strong>ZIP Code:</strong> ' + zipCode +
            '</div>';

        document.getElementById("signupOutput").innerHTML += outputString;
        document.getElementById("mailingListForm").reset();
    });
});
