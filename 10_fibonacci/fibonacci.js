const fibonacci = function(n) {
    if (+n > -1){
        n = +n;
        if (n == 0 || n == 1){
            return n;
        }
        else{
            return (fibonacci(n - 1) + fibonacci(n - 2));
        };
    }
    else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
