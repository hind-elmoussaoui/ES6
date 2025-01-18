///////////////// Stop gninnipS My sdroW! ///////////////////////
function spinWords(string){
    return string
        .split(' ')
        .map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    })
    .join(' '); 
}
console.log(spinWords("Hey fellow warriors")); //--> "Hey wollef sroirraw"
console.log(spinWords("This is a test"));      //--> "This is a test"
console.log(spinWords("This is another test"));//--> "This is rehtona test"
