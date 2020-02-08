const sumAll = function (a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    let largerNumber = Math.max(a, b);
    let smallerNumber = Math.min(a, b);
    let runningTotal = 0;
    for (let i = smallerNumber; i <= largerNumber; i++) {
        runningTotal += i;
    }
    return runningTotal;
}

module.exports = sumAll
