/////////////////// Obtenez le caractère du milieu ///////////////////////
function getMiddle(s){
    const middle = Math.floor(s.length / 2 );
    return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
}
console.log(getMiddle("test"));   // “es”
console.log(getMiddle("testing"));  // “t”
console.log(getMiddle("middle"));  // “dd” 