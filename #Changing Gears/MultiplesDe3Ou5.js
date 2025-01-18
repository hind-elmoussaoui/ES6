///////////////// Multiples de 3 ou 5 ///////////////////////
function solution(number){
    if(number < 0){
        return 0;
    }
    let sum = 0;
    for( let i=0 ; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
        sum += i;
        }
    }
    return sum;
}
console.log(solution(10)); // 23
console.log(solution(5)); // 3
console.log(solution(9)); // 14
console.log(solution(3)); // 0
