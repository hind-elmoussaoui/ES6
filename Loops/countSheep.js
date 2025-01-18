///////////////// If you can't sleep, just count sheep!! ///////////////////////
var countSheep = function (num){
    let result = "";
    for(let i=1 ; i <= num ; i++){
        result += `${i} sheep...`; 
    }
    return result;
}
  console.log(countSheep(0)); // ""
  console.log(countSheep(1)); // "1 sheep..."
  console.log(countSheep(2)); // "1 sheep...2 sheep..."
  console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep..."
