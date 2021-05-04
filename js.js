function choose(choice) {
    if (choice == "add") {
        console.log(add(a,b));
    }
    if (choice == "subtract") {
        console.log(subtract(a,b));
    }
    if (choice == "multiply") {
        console.log(multiply(a,b));
    }
    if (choice == "divide") {
        console.log(divide(a,b));
    }
}

let array = [];

let num1;
let num2;

let updateArray = function() {
    let display = document.querySelector('#display');
    display.textContent = array.join("");
}


window.onload = event => {

    let numbers = document.querySelectorAll('.grid-number');
    numbers.forEach(function(e) {
        e.addEventListener("click", function() {
            if (array.length < 8) {
                array.push(e.innerText);
                updateArray();
            }
            console.log(array);
            
        });
    })

    let ac = document.querySelector('#a-c');
    ac.addEventListener("click", function() {
    array = [];
    display.textContent = 0;
    });

}

