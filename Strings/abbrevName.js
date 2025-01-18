///////////////// Abréger un nom en deux mots ///////////////////////
function abbrevName(name){
    return name
    .split(' ')
    .map(word => word.substr(0, 1).toUpperCase()) 
    .join('.');
}
console.log(abbrevName("Sam Harris")); // "S.H"
console.log(abbrevName("Patrick Feenan")); // "P.F"
console.log(abbrevName("Evan Cole")); // "E.C"
console.log(abbrevName("P Favuzzi")); // "P.F"
console.log(abbrevName("David Mendieta")); // "D.M"
