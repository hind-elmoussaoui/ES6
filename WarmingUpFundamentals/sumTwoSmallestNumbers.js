///////////////// Sum Tow Smallest Numbers ///////////////////////
function sumTwoSmallestNumbers(numbers){
    var [a, b] = numbers.sort((a, b) => a - b);
    return a + b ;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455
