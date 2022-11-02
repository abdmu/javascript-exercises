const palindromes = function (str) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    str = str.toLowerCase().split('');
    str = str.filter(s => alpha.includes(s)).join('');
    let len = str.length;
    if (len % 2 != 0){
        let index = ((len - 1) / 2) - 1;
        let n = index + 2;
        while (index > -1){
            if (str[index] != str[n]){
                return false
            }
            index--;
            n++;
        }
        return true;
    }
    else{
        let index = (len / 2) - 1;
        let n = index + 1;
        while (index > -1){
            if (str[index] != str[n]){
                return false;
            }
            index--;
            n++;
        }
        return true;
    };
};

// Do not edit below this line
module.exports = palindromes;
