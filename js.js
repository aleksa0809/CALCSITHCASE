const display = document.querySelector('#display');
const buttons = document.querySelectorAll('#controls button');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.onclick = function(e) {
        const value = button.textContent;
        display.textContent = value;
    }
}