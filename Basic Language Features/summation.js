///////////////// Grasshopper - Summation ///////////////////////
var summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
console.log(summation(2)); //3
console.log(summation(8)); //36
