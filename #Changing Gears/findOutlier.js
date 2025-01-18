///////////////// Find The Parity Outlier ///////////////////////
function findOutlier(integers){
    let evenCount = 0;
    let oddCount = 0;
    let lastEven = null;
    let lastOdd = null;

    for (let num of integers) {
        if (num % 2 === 0) {
        evenCount++;
        lastEven = num;
    } else {
        oddCount++;
        lastOdd = num;
    }
    if (evenCount > 1 && oddCount > 0) return lastOdd;
    if (oddCount > 1 && evenCount > 0) return lastEven;
    }
}
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
