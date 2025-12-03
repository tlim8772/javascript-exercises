function permutations(arr) {
    if  (arr.length == 0) {
        return [[]];
    }

    const out = []
    for (let i = 0; i < arr.length; i++) {
        const wish = permutations([...arr.slice(0, i), ...arr.slice(i + 1)]);
        out.push(...wish.map(x => [arr[i], ...x]));
    }
    return out;
}
  
// Do not edit below this line
module.exports = permutations;
