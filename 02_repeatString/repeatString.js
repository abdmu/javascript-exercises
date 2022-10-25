const repeatString = function(str, n) {
    if (n < 0){
        return 'ERROR';
    };
    let result = "";
    while (n > 0){
        result += str;
        n -= 1;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
