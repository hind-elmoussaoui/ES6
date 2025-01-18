///////////////// Masque de carte de crédit ///////////////////////
function maskify(cc){
    return cc.length > 4 ? '#'.repeat(cc.length - 4) + cc.split(-4) : cc;
}
console.log(maskify("4556364607935616")); //--> "############5616"
console.log(maskify("64607935616")); //-->  "#######5616"
console.log(maskify("1")); //-->  "1"
console.log(maskify("" ));  //--> ""
console.log(maskify("Skippy")); //--> "##ippy"
console.log(maskify("Nananananananananananananananana Batman!"));  //--> "####################################man!"
