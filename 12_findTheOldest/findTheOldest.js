const findTheOldest = function(arr) {
    let oldest = {
        name: '',
        yearOfBirth: 0,
        yearOfDeath: 0,
    };
    arr.forEach(person => {
        if (yearOfDeath in person){
            if ((person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)){
                oldest = person;
            }
        }
        else{
            const date = new Date().getFullYear()
            if (( date- person.yearOfBirth) > (date - oldest.yearOfBirth)){
                oldest = person;
            }
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
