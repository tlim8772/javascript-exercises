const fibonacci = function(x) {
    if (x < 0 || Number.isNaN(parseInt(x))) return 'OOPS';
    x = parseInt(x);
    return (x <= 1) ? x : fibonacci(x - 1) + fibonacci(x - 2);
};

// Do not edit below this line
module.exports = fibonacci;
