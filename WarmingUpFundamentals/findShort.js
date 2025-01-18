///////////////// le mots le plus court ///////////////////////
function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length));
}
console.log(findShort("I am learning JavaScript")); // 1
console.log(findShort("hello world"));  // 5
console.log(findShort("apple orange pear"));  // 4
