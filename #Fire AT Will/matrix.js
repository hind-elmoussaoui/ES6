const matrix = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

let array = [];

for (let i = 0; i < matrix.length; i++) {       
  for (let j = 0; j < matrix[i].length; j++) { 
    array.push(matrix[i][j]);                  
  }
}
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
        
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array);
