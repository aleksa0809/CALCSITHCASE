const display = document.querySelector('#display');
const buttons = document.querySelectorAll('#controls button');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.onclick = function(e) {
        const value = button.textContent;
        display.textContent = value;
    }
}


function calc() {
    let n1 = parseInt(document.getElementById)('n1').value;
    let n2 = parseInt(document.getElementById(n2)).value;
    let oper = document.getElementById('operations').value;


    if (oper === '+') {
        let n2 = document.getElementById('result').value = n1 + n2;





    }
}