///////////////// Count the Monkeys! ///////////////////////
function monkeyCount(n) {
    let result = [];
    for(let i=1 ; i <= n ; i++){
        result.push(i); 
    }
    return result;
}
console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)); // [1, 2, 3]
console.log(monkeyCount(9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(monkeyCount(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(20)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
