///////////////// La chaîne se termine par? ///////////////////////
function solution(str, ending){
    return  str.endsWith(ending);
}
console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false
