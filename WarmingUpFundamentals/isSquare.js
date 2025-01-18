///////////////// Tu es un carré ! ///////////////////////
function isSquare(n){
    return n >= 0 && Number.isInteger(Math.pow(n, 0.5));
}
console.log(isSquare(-1));  // false (pas un carré parfait)
console.log(isSquare(0));   // true (0 est un carré parfait)
console.log(isSquare(3));   // false (pas un carré parfait)
console.log(isSquare(4));   // true (2 * 2 = 4)
console.log(isSquare(25));  // true (5 * 5 = 25)
console.log(isSquare(26));  // false (pas un carré parfait)
