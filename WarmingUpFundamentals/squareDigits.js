///////////////// square digits ///////////////////////
function squareDigits(num){
    return parseInt(num.toString().split('').map(digit => digit ** 2).join(''));
}
console.log(squareDigits(9119)); // ➞ 811181
console.log(squareDigits(2483)); // ➞ 416649
console.log(squareDigits(3212)); // ➞ 9414
