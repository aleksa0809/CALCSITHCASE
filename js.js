const inputs = document.querySelectorAll('#display input');
const buttons = document.querySelectorAll('#controls button');

const firstOperand = inputs[0];
const secondOperand = inputs[1];

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.onclick = function(e) {
        const value = button.textContent;
        firstOperand.value = firstOperand.value + value;

    }
}

let operation;
const select = document.querySelector('select');
select.onchange = function(e) {
    secondOperand.value = firstOperand.value;
    firstOperand.value = '';
    operation = select.value;
}

const equals = document.querySelector('#equals');
const result = document.querySelector('#result');

equals.onclick = function() {
    switch (operation) {
        case '+':
            result.value = parseInt(secondOperand.value) + parseInt(firstOperand.value);
            break;
        case '-':
            result.value = parseInt(firstOperand.value) - parseInt(secondOperand.value);
            break;
        case '/':
            result.value = parseInt(firstOperand.value) / parseInt(secondOperand.value);
            break;
        case '*':
            result.value = parseInt(secondOperand.value) * parseInt(firstOperand.value);
            break;

    }

}