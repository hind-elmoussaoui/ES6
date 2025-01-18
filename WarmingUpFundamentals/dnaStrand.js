///////////////// ADN complémentaire ///////////////////////
function dnaStrand(dna){
    const complement = {A : 'T' , T : 'A' , C : 'G' , G : 'C'};
    return dna.split('').map(base => complement[base]).join('');
}
console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"

// D'autre méthode //
function dnaStrand(dna){
  let result = "";
    for(let i = 0 ; i < dna.length; i++)
      switch(dna[i]){
        case 'A':
          result += "T";
          break;
        case 'T':
          result += "A";
          break;
        case 'C':
          result += "G";
          break;
        case 'G':
          result += "C";
          break;
      }
  return result;
}
console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"

