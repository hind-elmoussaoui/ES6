function nextBigger(n){
  let digits = n.toString().split('');
    for(let i= digits.length - 2; i >= 0 ; i--){
        if(digits[i] < digits[i+1]){
            for(let j= digits.length - 1 ; j > i ; j--){
                if(digits[j] > digits[i]){
                    
                    let temp = digits[i];
                    digits[i] = digits[j];
                    digits[j] = temp;
                    
                    let left = digits.slice(0, i+1);
                    let right = digits.slice(i+1).sort();
                    return parseInt(left.concat(right).join(''), 10);
                }
            }
        }
    }
    return -1;
}
console.log(nextBigger(12)); //==> 21
console.log(nextBigger(513)); //==> 531
console.log(nextBigger(2017)); //==> 2071
console.log(nextBigger(544)); //==> -1
