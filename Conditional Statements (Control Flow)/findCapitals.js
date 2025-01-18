///////////////// Trouver les capitales ///////////////////////
var capitals = function (word) {
	let indices = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
            indices.push(i);
        }
    }
    return indices;
};
console.log(capitals("CodEWaRs")); // [0, 3, 4, 6]
console.log(capitals('aAbB'));// [1,3]
console.log(capitals('AAA')); // [0,1,2]
console.log(capitals('')); //[]
