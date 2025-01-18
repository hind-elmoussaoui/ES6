var maxSequence = function(arr){
    let max = 0;
  let maximum = 0;

  for (let i = 0; i < arr.length; i++) {
    maximum += arr[i];
    if (maximum < 0) {
      maximum = 0; 
    }
    if (maximum > max) {
      max = maximum; 
    }
  }

  return max;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([1, 2, 3, 4])); //  10
console.log(maxSequence([-1, -2, -3, -4])); // 0
console.log(maxSequence([]));  // 0
