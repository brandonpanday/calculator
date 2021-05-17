let total = 0;
let array = [];

let numOne;
let numTwo;
let operation;

// Calculation functions
let add = function(a,b) {
    return a + b;
}
let subtract = function(a,b) {
    return a - b;
}
let multiply = function(a,b) {
    return a * b;
}
let divide = function(a,b) {
    return a / b;
}


             
window.onload = () => {

    let display = document.querySelector('#display');


    // Display numbers as entered
    let updateArray = function() {
        display.textContent = array.join("");
    };

    // Add numbers to array
    let numbers = document.querySelectorAll('.grid-number');
    numbers.forEach(function(e) {
        e.addEventListener("click", function() {
            if (array.length < 8) {
                array.push(e.innerText);
                updateArray();
            }
            console.log(array);
            
        })
    });

    // Function to add operation events
    let operators = document.querySelectorAll(".grid-operation");
    operators.forEach(function(e) {
        e.addEventListener("click", function(i) {
            if (numOne == undefined) {
                numOne = storeValue(array);
                array = [];
                operation = i.target.id;
                console.log(operation);
            }
            else if (numTwo == undefined) {
                numTwo = storeValue(array);
                array = [];
                total = operate(numOne, numTwo, operation);
                display.textContent = total;
            }
            

        })
    })

    // Convert array to int and store in variable number
    let storeValue = function(array) {
        let store = parseInt(array.join(""));
        return store;
    }

    let operate = function(num1, num2, operator) {
        if (operator == "add") {
            return add(num1,num2);
        }
        if (operator == "subtract") {
            return subtract(num1,num2);
        }
        if (operator == "multiply") {
            return multiply(num1,num2);
        }
        if (operator == "divide") {
            return divide(num1,num2);
        }
    }

}