const removeFromArray = function (inputArray, ...args) {
    console.log(inputArray);
    console.log(args);


    return inputArray.filter(v => !args.includes(v))
}

console.log(removeFromArray([1, 2, 3, 4], 3, 2));



module.exports = removeFromArray
