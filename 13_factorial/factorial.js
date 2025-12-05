const factorial = function(x) {
    if (typeof x != 'number' || !Number.isInteger(x) || x < 0) return undefined;
    return (x === 0) ? 1 : x * factorial(x - 1);
};

// Do not edit below this line
module.exports = factorial;