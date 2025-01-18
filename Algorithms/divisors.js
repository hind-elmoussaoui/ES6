///////////////// Trouvez les diviseurs ///////////////////////
function divisors(integer) {
    let result = [];
    for (let i = 2; i < integer; i++) { 
        if (integer % i === 0) { 
        result.push(i); 
        }
    }
    return result.length > 0 ? result : `${integer} is prime`;
}
  console.log(divisors(12)); //--> [2, 3, 4, 6]
  console.log(divisors(25)); //--> [5]
  console.log(divisors(13)); //--> "13 is prime"
