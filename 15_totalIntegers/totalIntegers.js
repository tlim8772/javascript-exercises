const totalIntegers = function(x) {
    function helper(x) {
        if (x === null) {
            return 0;
        } else if (typeof x != 'object') {
            return Number.isInteger(x);
        } else {
            return Object.values(x).reduce((acc, x) => acc + helper(x), 0);
        }
    }

    if (typeof x !== 'object') return undefined;
    
    return helper(x);
};
  
// Do not edit below this line
module.exports = totalIntegers;

console.log(Object.values([1,2,3]));
