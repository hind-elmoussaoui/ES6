///////////////// Ex et Oh ///////////////////////
function XO(str){
    str = str.toLowerCase();
    return (str.split('x').length - 1) === (str.split('o').length - 1);
}
console.log(XO("ooxx"));    // true
console.log(XO("xooxx"));   // false
console.log(XO("ooxXm"));   // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo"));    // false
