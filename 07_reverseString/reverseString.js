const reverseString = function(s) {
    const arr = Array(s.length);
    for (let i = s.length - 1; i > -1; i--) {
        arr[s.length - 1 - i] = s[i];
    }
    return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
