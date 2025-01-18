///////////////// find the smallest ///////////////////////
function findSmallestInt(arr){
    return Math.min(...arr);
}
console.log(findSmallestInt([34, 15, 88, 2])); // 2
console.log(findSmallestInt([34, -345, -1, 100])); // -345
