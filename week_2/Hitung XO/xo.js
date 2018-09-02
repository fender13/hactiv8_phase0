function xo(str) {
    var countX = 0;
    var countY = 0 ;
    var i = 0;
    
    while (i<str.length) {
        if(str[i] === "x") {
            countX = countX + 1;
        } else {
            countY = countY + 1;
        }
        i++;
    }
    if (countX === countY) {
      return true;
    } else {
      return false;
    }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true