///////////////// Marmonnement ///////////////////////
function accum(s){
    return s
    .split('')
    .map((str, index) => str.toUpperCase() + str.toLowerCase().repeat(index))
    .join('');
}
console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
console.log(accum("ZPGLNRXQENU")); //-> "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"