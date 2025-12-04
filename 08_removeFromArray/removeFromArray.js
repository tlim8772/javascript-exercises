const removeFromArray = function(arr, ...toRemove) {
    let s = new Set(toRemove);
    return arr.filter(x => !s.has(x));

};

// Do not edit below this line
module.exports = removeFromArray;
