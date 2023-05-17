function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('3 digit pin and again calling', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const prevNumber = calcInput.value;
        const newNumber = prevNumber + number;
        calcInput.value = newNumber;

    }
});

function verifyPin() {
    // console.log('going to pin');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const failedMessage = document.getElementById('notify-failed');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
    }

    else {
        failedMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}