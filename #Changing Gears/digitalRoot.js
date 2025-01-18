///////////////// Sum of Digits / Digital Root ///////////////////////
function digitalRoot(n) {
    while (n >= 10) { 
        let sum = 0;
        while (n > 0) {
            sum += n % 10; 
            n = Math.floor(n / 10);
        }
        n = sum; 
    }
    return n;
}
console.log(digitalRoot(16));     // 7 (1 + 6 = 7)
console.log(digitalRoot(942));    // 6 (9 + 4 + 2 = 15, 1 + 5 = 6)
console.log(digitalRoot(132189)); // 6 (1 + 3 + 2 + 1 + 8 + 9 = 24, 2 + 4 = 6)
console.log(digitalRoot(493193)); // 2 (4 + 9 + 3 + 1 + 9 + 3 = 29, 2 + 9 = 11, 1 + 1 = 2)
