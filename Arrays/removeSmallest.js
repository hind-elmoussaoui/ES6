///////////////// Supprimer le minimum ///////////////////////
function removeSmallest(numbers){
    let min = numbers[0];
    let newArray = [];
    let Index = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < min ){
        min = numbers[i];
        Index = i;
        }
    }
    for(let i = 0 ; i < numbers.length ; i++){
        if(i !== Index){
        newArray.push(numbers[i]);
        }else{ continue; }
    }
    return newArray;
}
console.log(removeSmallest([1, 2, 3, 4, 5])); // ➞ [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // ➞ [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // ➞ [2, 2, 2, 1]
console.log(removeSmallest([])); // ➞ []
