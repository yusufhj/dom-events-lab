/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operator = document.querySelector('.operator');
const equal = document.querySelector('.equals');

const calculator = document.querySelector('#calculator');


/*-------------------------------- Variables --------------------------------*/

let num1 = '';
let num2 = '';
let op = '';
let result = '';


/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
      if (event.target.classList.contains('number')) {
            if (op === '' && num1 == '') {
                num1 += event.target.innerText;
                display.innerText = num1;
                console.log("num1: ", num1);
            } else if (op !== '' && num1 !== '') {
                num2 += event.target.innerText;
                display.innerText = num2;
                console.log("num2: ", num2);
            }
        }
        if (event.target.classList.contains('operator')) {
            if (event.target.innerText === 'C') {
                num1 = '';
                num2 = '';
                op = '';
                display.innerText = '';
                console.log("clear");
            } else {
                op += event.target.innerText;
                display.innerText = op;
                console.log("op: ", op);
            }
        }

        if (event.target.classList.contains('equals')) {
            if (op === '+') {
                result = parseInt(num1) + parseInt(num2);
            } else if (op === '-') {
                result = parseInt(num1) - parseInt(num2);
            } else if (op === '*') {
                result = parseInt(num1) * parseInt(num2);
            } else if (op === '/') {
                result = parseInt(num1) / parseInt(num2);
            }
            num1 = result;
            num2 = '';
            op = '';
            display.innerText = result;
            console.log("result: ", result);
        }
    });
});


/*-------------------------------- Functions --------------------------------*/