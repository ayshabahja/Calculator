const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = calculator.querySelector('.display');

let firstValue = '';
let operator = '';
let secondValue = '';
let previousKeyType = '';

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            previousKeyType = 'number';
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            firstValue = displayedNum;
            operator = action;
            previousKeyType = 'operator';
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            }
            previousKeyType = 'decimal';
        }

        if (action === 'clear') {
            display.textContent = '0';
            firstValue = '';
            operator = '';
            secondValue = '';
            previousKeyType = 'clear';
        }

        if (action === 'calculate') {
            secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue);
            previousKeyType = 'calculate';
        }
    }
});

function calculate(first, operator, second) {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);

    if (operator === 'add') {
        return firstNum + secondNum;
    }

    if (operator === 'subtract') {
        return firstNum - secondNum;
    }

    if (operator === 'multiply') {
        return firstNum * secondNum;
    }

    if (operator === 'divide') {
        return firstNum / secondNum;
    }
}