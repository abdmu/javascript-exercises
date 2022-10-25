const sumAll = function(m, n) {
    if (!Number.isInteger(m) || !Number.isInteger(n)){
        return "ERROR";
    }
    if (m < 0 || n < 0){
        return "ERROR";
    }
    if (m > n){
        let x = n;
        n = m;
        m = x;
    }
    let total = 0;
    while (m <= n){
        total += m;
        m++
    };
    return total;
};

// Do not edit below this line
module.exports = sumAll;
