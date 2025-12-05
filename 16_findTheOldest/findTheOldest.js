function getAge(p) {
    let {yearOfBirth, yearOfDeath} = p;
    if (yearOfDeath == undefined) {
        return new Date().getFullYear() - yearOfBirth;
    } else {
        return yearOfDeath - yearOfBirth;
    }
}

const findTheOldest = function(people) {
    let res = null;
    let age = null;
    for (const p of people) {
        if (res == null){
            res = p;
            age = getAge(res);
        } else {
            const myAge = getAge(p);
            if (myAge > age) {
                res = p;
                age = myAge;
            }
        }
    }

    return res;
};

// Do not edit below this line
module.exports = findTheOldest;
