const repeatString = function (input, number) {
    if (number < 0) {
        return 'ERROR';
    }
    let output = '';
    for (let i = 0; i < number; i++) {
        output += input;
    }
    return output;
}

module.exports = repeatString
