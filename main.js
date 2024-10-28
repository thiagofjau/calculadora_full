let outputscreen = document.getElementById('output-screen');

function display(num) {
    outputscreen.value += num;
}

function calculate() {
    try {
        if (outputscreen.value.includes('/0')) {
            throw new Error("Divisão por zero não é permitida");
        }
        outputscreen.value = Function('"use strict";return (' + outputscreen.value + ')')();
    }
    catch (err) {
        alert(err.message);
    }
}

function clr() {
    outputscreen.value = '';
}

function del() {

    outputscreen.value = outputscreen.value.slice(0, -1);
}

//Atribuindo as teclas à calculadora
document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        display(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        del();
    } else if (key.toLowerCase() === 'c' || key === 'Escape') {
        clr();
    }
});

//Travar operador, não permitindo que digite mais de uma vez, para evitar erro. (ex: 2++1)
function display(num) {
    const operators = ['+', '-', '*', '/', '%'];
    const lastChar = outputscreen.value.slice(-1);
    if (operators.includes(num) && operators.includes(lastChar)) {
        return;
    }
    outputscreen.value += num;
}