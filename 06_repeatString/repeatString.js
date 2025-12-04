const repeatString = function(s, n) {
    if (n < 0) return 'ERROR';
    return Array(n).fill(s).join('');
};

// Do not edit below this line
module.exports = repeatString;
