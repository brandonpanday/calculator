let array = [0];
let numOne;
let numTwo;
let total;
let dec;
let operator;
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
    //check if decimal in number
    let checkDecimal = function(array) {
        let decimal  = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == '.') {
                decimal = true;
            }
        }
        return decimal;

    }

    // AC Button
    let ac = document.querySelector('#a-c');
    ac.addEventListener("click", function() {
        array = [0];
        numOne = undefined;
        numTwo = undefined;
        operator = undefined;
        updateArray();
    });

    // Add numbers to array
    let numbers = document.querySelectorAll('.grid-number');
    numbers.forEach(function(e) {
        e.addEventListener("click", function(i) {
            if (array.length < 8) {
                if (i.target.id == 'decimal') {
                    dec = checkDecimal(array);
                    if (dec == false) {
                        array.push(".");
                        updateArray();
                    }
                }
                else if ((i.target.id == '0') && (array.length == 0)) {
                    return null;
                }
                else if (array[0] == 0) {
                    array = [];
                    array.push(i.target.id);
                    updateArray();
                }
                else {
                    array.push(i.target.id);
                    updateArray();
                }
                
            }
        })
    });

    // Function to add operation events
    let operators = document.querySelectorAll(".grid-operation");
    operators.forEach(function(e) {
        e.addEventListener("click", function(i) {
            if (numOne == undefined) {
                numOne = storeValue(array);
                array = []; 
            }
            else if (numTwo == undefined) {
                if (array.length == 0) {
                    numOne = operate(numOne, numOne, operator);
                    display.textContent = numOne;
                    numTwo = undefined;
                }
                else {
                    numTwo = storeValue(array);
                    array = [];
                    numOne = operate(numOne, numTwo, operator);
                    display.textContent = numOne;
                    numTwo = undefined;
                }
                
            }
            operator = i.target.id;
        })
    })

    // Convert array to int and store in variable number
    let storeValue = function(array) {
        let store = parseFloat(array.join(""));
        return store;
    }

    let operate = function(num1, num2, operator) {
        let answer;
        if (operator == "add") {
            answer = add(num1,num2);
        }
        if (operator == "subtract") {
            answer = subtract(num1,num2);
        }
        if (operator == "multiply") {
            answer = multiply(num1,num2);
        }
        if (operator == "divide") {
            if (num2 == 0) {
                answer = "Nice try!";
            }
            else {
                answer = divide(num1,num2);
            }
            
        }
        if (operator == 'equal') {
            return numOne;
        }

        if (answer > 99999999) {
            answer = answer.toPrecision(3);
            return answer;
        }
        else
            return answer;
    }

}