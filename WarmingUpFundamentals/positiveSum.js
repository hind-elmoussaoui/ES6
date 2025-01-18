///////////////// positive sum ///////////////////////
function positiveSum(arr){
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(positiveSum([1, -4, 7, 12]));  // 20
console.log(positiveSum([-1, -2, -3]));    // 0
console.log(positiveSum([5, 10, 15]));     // 30
