///////////////// Descending Order ///////////////////////
function descendingOrder(n){
    return +[...String(n)].sort().reverse().join('');
}
console.log(descendingOrder(42145));    // 54421
console.log(descendingOrder(145263));   // 654321
console.log(descendingOrder(0));        // 0
