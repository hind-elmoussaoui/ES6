///////////////// Des uns et des zéros ///////////////////////
const binaryArrayToNumber = arr =>{
    return parseInt(arr.join(''), 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1])); // ➞ 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // ➞ 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // ➞ 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // ➞ 9
console.log(binaryArrayToNumber([1, 1, 1, 1])); // ➞ 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // ➞ 11
