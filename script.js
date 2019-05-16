function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b)
    } else if (operator == '*') {
        return multiply(a, b)
    } else if (operator == '/') {
        return divide(a, b)
    }
}

function display(text) {
    const disp = document.querySelector('.display')
    disp.textContent = text
}

function buttonPress(e) {
    const disp = document.querySelector('.display');
    let buttonText = e.target.textContent;
    if (["0", "1", '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(buttonText) !== -1) {
        if (disp.textContent == 0) {
            disp.textContent = buttonText;
        } else {
            disp.textContent += buttonText;
        }
    } else if (['/', '+', '-', '*'].indexOf(buttonText) !== -1) {
        if (operator) {
            b = disp.textContent;
            display(operate(operator, a, b))
            a = disp.textContent;
            operator = buttonText;
        } else {
            a = disp.textContent;
            operator = buttonText;
            display(0)
        }
    } else if (buttonText == '=') {
        if (operator) {
            b = disp.textContent;
            display(operate(operator, a, b))
        }
    } else if (buttonText == 'Clear') {
        display('0')
        a = 0
        b = 0
        operator = null
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', (e) => buttonPress(e))
})

let a = 0;
let b = 0;
let operator = null;
display(a)