const ErrorText = element => element.innerText = 'Input Error!';

const displayTimes = () => {
    const number = document.getElementById('number').value;
    const parsedNumber = parseInt(number);
    const timesresult = document.getElementById('times-result');

    if (!isFinite(parsedNumber) || isNaN(parsedNumber)) return ErrorText(timesresult);
    if (parsedNumber != number) return ErrorText(timesresult);
    if (parsedNumber < 1 || parsedNumber > 9) return ErrorText(timesresult);

    const result = [];
    for (let i = 1; i <= 9; i++) {
        result.push(parsedNumber + ' X ' + i + ' = ' + parsedNumber * i);

    }
    timesresult.innerText = result.join('\n');
};