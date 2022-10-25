const removeFromArray = function(arr, ...args) {
    console.log(args);
    for (const arg of args){
        let index = arr.indexOf(arg);
        if (index > -1){
            arr.splice(index, 1);
        }
    };
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
