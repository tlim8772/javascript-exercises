const sumAll = function(l, r) {
    if (l < 0 || r < 0 || !Number.isInteger(l) || !Number.isInteger(r)) return 'ERROR';
    if (r < l) [l, r] = [r, l];
    let sum = 0;
    for (let i = l; i <= r; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
