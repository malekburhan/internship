let currentDisplay = '0';
let operator = '';
let previousValue = '';

function updateDisplay() {
    document.getElementById('display').innerText = currentDisplay;
}

function appendNumber(number) {
    currentDisplay = currentDisplay === '0' ? number : currentDisplay + number;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    previousValue = currentDisplay;
    currentDisplay = '0';
    updateDisplay();
}

function calculate() {
    let result;

    if (!isNaN(previousValue) && !isNaN(currentDisplay)) {
        switch (operator) {
            case '+':
                result = parseFloat(previousValue) + parseFloat(currentDisplay);
                break;
            case '-':
                result = parseFloat(previousValue) - parseFloat(currentDisplay);
                break;
            case '*':
                result = parseFloat(previousValue) * parseFloat(currentDisplay);
                break;
            case '/':
                result = parseFloat(previousValue) / parseFloat(currentDisplay);
                break;
            default:
                return;
        }
        currentDisplay = result.toString();
        operator = '';
        updateDisplay();
    } else {
        // Handle invalid input or division by zero
        currentDisplay = 'Error';
        operator = '';
        previousValue = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentDisplay = '0';
    operator = '';
    previousValue = '';
    updateDisplay();
}

// Initialize the display
updateDisplay();
