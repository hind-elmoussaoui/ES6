///////////////// Conversion de l'ADN en ARN ///////////////////////
function DNAtoRNA(dna) {
    var result = "";
    for(var i = 0 ; i < dna.length ; i++){
        switch(dna[i]){
            case 'A' :
            result += "A"
            break;
            case 'G' :
            result += "G"
            break;
            case 'C' :
            result += "C"
            break;
            case 'T' :
            result += "U"
            break;
        }
    }
    return result;
}
console.log(DNAtoRNA("TTTT")); // "UUUU"
console.log(DNAtoRNA("GCAT")); // "GCAU"
console.log(DNAtoRNA("GACCGCCGCC")); // "GACCGCCGCC"
