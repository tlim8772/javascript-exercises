const palindromes = function (s) {
    const punctuations = new Set([',', '!', '.', ' ']);
    const newS = s.split('').filter(c => !punctuations.has(c)).map(c => c.toLowerCase());

    const s1 = newS.join('');
    const s2 = newS.reverse().join('');
    return s1 === s2;
};

// Do not edit below this line
module.exports = palindromes;
