/////////////////// Nombre de voyelles ///////////////////////
function getCount(str){
    return str
    .split('')
    .filter(Vowels => 'aeiou'
    .includes(Vowels)).length;
}
console.log(getCount("abracadabra"));  //5
