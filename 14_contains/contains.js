const contains = function(obj, x) {
    if (obj === null || typeof obj != 'object') {
        return obj === x || (Number.isNaN(x) && Number.isNaN(x));
    }
    
    if (obj === x) return true;
    for (const val of Object.values(obj)) {
        if (contains(val, x)) return true;
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
