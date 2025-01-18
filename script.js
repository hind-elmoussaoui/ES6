



///////////////// Ex et Oh ///////////////////////
function XO(str){
    str = str.toLowerCase();
    return (str.split('x').length - 1) === (str.split('o').length - 1);
}
console.log(XO("ooxx"));    // true
console.log(XO("xooxx"));   // false
console.log(XO("ooxXm"));   // true
console.log(XO("zpzpzpp")); // true
console.log(XO("zzoo"));    // false

///////////////// square digits ///////////////////////
function squareDigits(num){
    return parseInt(num.toString().split('').map(digit => digit ** 2).join(''));
}
console.log(squareDigits(9119)); // ➞ 811181
console.log(squareDigits(2483)); // ➞ 416649
console.log(squareDigits(3212)); // ➞ 9414

///////////////// le mots le plus court ///////////////////////
function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length));
}
console.log(findShort("I am learning JavaScript")); // 1
console.log(findShort("hello world"));  // 5
console.log(findShort("apple orange pear"));  // 4

///////////////// ADN complémentaire ///////////////////////
function dnaStrand(dna){
    const complement = {A : 'T' , T : 'A' , C : 'G' , G : 'C'};
    return dna.split('').map(base => complement[base]).join('');
}
console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"

///////////////// Descending Order ///////////////////////
function descendingOrder(n){
    return +[...String(n)].sort().reverse().join('');
}
console.log(descendingOrder(42145));    // 54421
console.log(descendingOrder(145263));   // 654321
console.log(descendingOrder(0));        // 0

///////////////// positive sum ///////////////////////
function positiveSum(arr){
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(positiveSum([1, -4, 7, 12]));  // 20
console.log(positiveSum([-1, -2, -3]));    // 0
console.log(positiveSum([5, 10, 15]));     // 30

///////////////// is isogrammes ///////////////////////
function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length;
}
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("")); // true

///////////////// filtrage de liste ///////////////////////
function filter_list(l){
    return l.filter(item => typeof item === 'number');
}
console.log(filter_list([1,2,'a','b']));         // [1, 2]
console.log(filter_list([1,'a','b',0,15]));       // [1, 0, 15]
console.log(filter_list([1,2,'aasf','1','123',123])); // [1, 2, 123]

///////////////// find the smallest ///////////////////////
function findSmallestInt(arr){
    return Math.min(...arr);
}
console.log(findSmallestInt([34, 15, 88, 2])); // 2
console.log(findSmallestInt([34, -345, -1, 100])); // -345

///////////////// Sum Tow Smallest Numbers ///////////////////////
function sumTwoSmallestNumbers(numbers){
    var [a, b] = numbers.sort((a, b) => a - b);
    return a + b ;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 3453455

///////////////// Grow of a population ///////////////////////
function nbYear(p0, percent, aug, p){
    for(var years = 0 ; p0 < p ; years++){
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years;
}
console.log(nbYear(1000, 2, 50, 1200)); // 3
console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10

///////////////// String repeat ///////////////////////
function repeatStr(n, s){
    return s.repeat(n);
}
console.log(repeatStr(6, "I"));       // "IIIIII"
console.log(repeatStr(5, "Hello"));   // "HelloHelloHelloHelloHello"

///////////////// est-ce une Triangle ///////////////////////
function isTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(4, 2, 3)); // true
console.log(isTriangle(2, 2, 2)); // true
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(-5, 1, 3)); // false
console.log(isTriangle(0, 2, 3)); // false
console.log(isTriangle(1, 2, 9)); // false

///////////////// Trouvez le prochain carré parfait ! ///////////////////////
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1

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

///////////////// Somme de nombres impaire ///////////////////////
function rowSumOddNumbers(n){
    return Math.pow(n, 3)
}
console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));

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

///////////////// Return Negative ///////////////////////
function makeNegative(num) {
    return num < 0 ? num : -num;
}
  console.log(makeNegative(1));    // return -1
  console.log(makeNegative(-5));   // return -5
  console.log(makeNegative(0));    // return 0
  console.log(makeNegative(0.12)); // return -0.12

///////////////// supprimer la Fin et début  ///////////////////////
function removeChar(str){
    return str.slice(1, -1);
};
  console.log(removeChar('testing')); //estin

///////////////// supprimer l'espace de chaîne  ///////////////////////
function noSpace(x){
    return x.split(' ').join('');
}
  console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")) //-> "8j8mBliB8gimjB8B8jlB"
  console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")) //-> "88Bifk8hB8BB8BBBB888chl8BhBfd"
  console.log(noSpace("8aaaaa dddd r     ")) //-> "8aaaaaddddr"

///////////////// convertissez les valeurs booléennes en chaînes <<Yes>> ou <<No>> ///////////////////////
function boolToWord( bool ){
    return bool ? "Yes" : "No";
}
  console.log(boolToWord(true));  //Yes
  console.log(boolToWord(false)); //No

///////////////// convertissez un nombre en chaîne ///////////////////////
function numberToString(num) {
    return num.toString();
}
  console.log(numberToString(123));  //--> "123"
  console.log(numberToString(999));  //--> "999"
  console.log(numberToString(-100)); //--> "-100"

///////////////// Opérations mathématiques de base ///////////////////////
function basicOp(operation, value1, value2){
    if (operation === '+'){
        return value1 + value2;
    }else if(operation === '-'){
        return value1 - value2;
    }else if(operation === '*'){
        return value1 * value2;
    }else if(operation === '/'){
        return value1 / value2;
    }
}
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

///////////////// Sum of the first nth term of series ///////////////////////
function SeriesSum(n) {
    let sum = 0;
    for( i = 0 ; i < n ; i++){
      sum += 1 /(3 * i + 1);
    }
    return sum.toFixed(2);
}
  console.log(SeriesSum(1)) //--> 1 --> "1.00"
  console.log(SeriesSum(2)) //--> 1 + 1/4 --> "1.25"
  console.log(SeriesSum(5)) //--> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

///////////////// Restez hydraté ///////////////////////
function litres(time) {
    return Math.floor(time * 0.5);
}
console.log(litres(2));
console.log(litres(1.4));
console.log(litres(12.3));
console.log(litres(0.82));
console.log(litres(11.8));
console.log(litres(1787));
console.log(litres(0));

///////////////// Siécle à partir de l'année ///////////////////////
function century(year) {
    // Finish this :)
    return Math.ceil(year / 100);
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));

///////////////// Débutant-Perdu sans carte  ///////////////////////
function maps(x){
    let result = [ ];
    for(let i = 0 ; i < x.length ; i++){
      result.push(x[i] * 2);
    }
    return result;
}
console.log(maps([1, 2, 3])); //[2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
console.log(maps([2, 2, 2, 2, 2, 2]));  // [4, 4, 4, 4, 4, 4]

///////////////// Reversed Strings ///////////////////////
function solution(str){
    return str.split('').reverse().join('');
}
console.log(solution('world')); // 'dlrow'
console.log(solution('hello')); // 'olleh'
console.log(solution('')); // ''
console.log(solution('h')); // 'h'

///////////////// La chaîne se termine par? ///////////////////////
function solution(str, ending){
    return  str.endsWith(ending);
}
console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false

///////////////// Est-ce que je reçois un bonus? ///////////////////////
function bonusTime(salary, bonus) {
    return '£' + (bonus ? salary * 10 : salary);
}
console.log(bonusTime(10000, true)); // '£100000'
console.log(bonusTime(25000, true)); // '£250000'
console.log(bonusTime(10000, false)); // '£10000'
console.log(bonusTime(60000, false)); // '£60000'
console.log(bonusTime(2, true)); // '£20'
console.log(bonusTime(78, false)); // '£78'
console.log(bonusTime(67890, true)); // '£678900'

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

///////////////// Compter les moutons ///////////////////////
function countSheeps(sheep){
    let count = 0 ;
    for(let i = 0 ; i < sheep.length ; i++){
        if(sheep[i] === true){
            count++ ;
        }
    }
    return count;
}
console.log(countSheeps([true, false, false, true, false])); //➞ 2
console.log(countSheeps([false, false, false, false])); //➞ 0
console.log(countSheeps([])); //➞ 0
console.log(countSheeps([true,  true,  true,  false, true,  true,  true,  true ,
true,  false, true,  false, true,  false, false, true ,
true,  true,  true,  true , false, false, true,  true])); //➞ 17

///////////////// Des uns et des zéros ///////////////////////
const binaryArrayToNumber = arr =>{
    return parseInt(arr.join(''), 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1])); // ➞ 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // ➞ 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // ➞ 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // ➞ 9
console.log(binaryArrayToNumber([1, 1, 1, 1])); // ➞ 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // ➞ 11

///////////////// A Needle in the Haystack ///////////////////////
function findNeedle(haystack) {
    const array = haystack.indexOf("needle");
    return `found the needle at position ${array}`;
}
  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randoJunk"])); // ➞ "found the needle at position 5"
  console.log(findNeedle(["hay", "junk", "needle", "hay"])); // ➞ "found the needle at position 2"

///////////////// Supprimer le minimum ///////////////////////
function removeSmallest(numbers){
    let min = numbers[0];
    let newArray = [];
    let Index = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < min ){
        min = numbers[i];
        Index = i;
        }
    }
    for(let i = 0 ; i < numbers.length ; i++){
        if(i !== Index){
        newArray.push(numbers[i]);
        }else{ continue; }
    }
    return newArray;
}
console.log(removeSmallest([1, 2, 3, 4, 5])); // ➞ [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // ➞ [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // ➞ [2, 2, 2, 1]
console.log(removeSmallest([])); // ➞ []

///////////////// Convert number to reversed array of digits ///////////////////////
function digitize(n){
    return String(n).split('').reverse().map(Number);
}
console.log(digitize(35231)); // ➞ [1, 3, 2, 5, 3]
console.log(digitize(0));     // ➞ [0]

///////////////// Créez une fonction qui fais de l'arithmétique ///////////////////////
function arithmetic(a, b, operator){
    if(operator === 'add'){
        return a + b;
    }else if(operator === 'subtract'){
        return a - b;
    }else if(operator === 'multiply'){
        return a * b;
    }else if(operator === 'divide'){
        return a / b;
    }
}
console.log(arithmetic(5, 2, "add" ));    //--> 7
console.log(arithmetic(5, 2, "subtract")); //--> 3
console.log(arithmetic(5, 2, "multiply")); //--> 10
console.log(arithmetic(5, 2, "divide"));  //--> 2.5

///////////////// Regular Ball Super Ball ///////////////////////
var Ball = function(ballType) {
    return {
        ballType: ballType || "regular" 
    };
};

const ball1 = Ball(); 
const ball2 = Ball("super");

console.log(ball1.ballType); // ➞ "regular"
console.log(ball2.ballType); // ➞ "super"

///////////////// Make them bark! ///////////////////////
function Dog(name, breed, gender, age) {
    this.name = name;
    this.breed = breed;
    this.gender = gender;
    this.age = age;
}

Dog.prototype.bark = function() {
    return 'Woof!';
};

const dog1 = new Dog('Buddy', 'Golden Retriever', 'Male', 3);
const dog2 = new Dog('Lucy', 'Beagle', 'Female', 5);

console.log(dog1.bark()); // ➞ 'Buddy says Woof!'
console.log(dog2.bark()); // ➞ 'Lucy says Woof!'

///////////////// Add property to every object in array ///////////////////////
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

questions.forEach(question => {
    question.usersAnswer = null;
});

console.log(questions);

///////////////// Grasshopper - Summation ///////////////////////
var summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
console.log(summation(2)); //3
console.log(summation(8)); //36

///////////////// Jenny's secret message ///////////////////////
function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}
console.log(greet("Jim")); // "Hello, Jim!"
console.log(greet("Jane")); // "Hello, Jane!"
console.log(greet("Simon")); // "Hello, Simon!"

///////////////// Function 1 - hello world ///////////////////////
function greet(){
    return "hello world!";
}
console.log(greet()); //"hello world!"

///////////////// Count the Monkeys! ///////////////////////
function monkeyCount(n) {
    let result = [];
    for(let i=1 ; i <= n ; i++){
        result.push(i); 
    }
    return result;
}
console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)); // [1, 2, 3]
console.log(monkeyCount(9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(monkeyCount(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(20)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

///////////////// Are You Playing Banjo? ///////////////////////
function areYouPlayingBanjo(name) {
    return name.startsWith('R') || name.startsWith('r') ?
    `${name} plays banjo` : `${name} does not play banjo`;
}
  console.log(areYouPlayingBanjo("Adam")); // "Adam does not play banjo"
  console.log(areYouPlayingBanjo("Paul")); // "Paul does not play banjo"
  console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"
  console.log(areYouPlayingBanjo("bravo")); // "bravo does not play banjo"
  console.log(areYouPlayingBanjo("rolf")); // "rolf plays banjo"

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

///////////////// plural ///////////////////////
function plural(n) {
    return n === 1 ? false : true;
}
  console.log(plural(0)); // true
  console.log(plural(0.5)); // true
  console.log(plural(1)); // false
  console.log(plural(100)); // true
  console.log(plural(Infinity)); // true

///////////////// Drink about ///////////////////////
function peopleWithAgeDrink(old) {
    if(old < 14){
        return "drink toddy";
    }else if(old < 18){
        return "drink coke";
    }else if(old < 21){
        return "drink beer";
    }else{
        return "drink whisky";
    }
};
console.log(peopleWithAgeDrink(13)); //--> "drink toddy"
console.log(peopleWithAgeDrink(17)); //--> "drink coke"
console.log(peopleWithAgeDrink(18)); //--> "drink beer"
console.log(peopleWithAgeDrink(20)); //--> "drink beer"
console.log(peopleWithAgeDrink(30)); //--> "drink whisky"

///////////////// Leonardo Dicaprio and Oscars ///////////////////////
function leo(oscar){
    if(oscar === 88){
        return "Leo finally won the oscar! Leo is happy";
    }else if(oscar === 86){
        return "Not even for Wolf of wallstreet?!";
    }else if(oscar > 88){
        return "Leo got one already!";
    }else{
        return  "When will you give Leo an Oscar?";
    }
}
  console.log(leo(89)); // "Leo got one already!"
  console.log(leo(88)); // "Leo finally won the oscar! Leo is happy"
  console.log(leo(87)); // "When will you give Leo an Oscar?"
  console.log(leo(86)); // "Not even for Wolf of wallstreet?!"

///////////////// Switch/Case - Correction de bug n°6 ///////////////////////
function evalObject(value){
    var result = 0;
    switch(value.operation){
        case'+': result = value.a + value.b; break;
        case'-': result = value.a - value.b; break;
        case'/': result = value.a / value.b; break;
        case'*': result = value.a * value.b; break;
        case'%': result = value.a % value.b; break;
        case'^': result = Math.pow(value.a, value.b); break;
    }
    return result;
}
  console.log(evalObject({a:1,b:1,operation:'+'})); // 2
  console.log(evalObject({a:1,b:1,operation:'-'})); // 0
  console.log(evalObject({a:1,b:1,operation:'/'})); // 1
  console.log(evalObject({a:1,b:1,operation:'*'})); // 1
  console.log(evalObject({a:1,b:1,operation:'%'})); // 0
  console.log(evalObject({a:1,b:1,operation:'^'})); // 1

///////////////// Sentence Smash ///////////////////////
function smash (words) {
    return words.join(' ');
}
console.log(smash(['hello', 'world', 'this', 'is', 'great'])); //"hello world this is great"

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

///////////////// Double Char ///////////////////////
function doubleChar(str) {
    return str
    .split('')
    .map(s => s + s)
    .join('');
}
  console.log(doubleChar("abcd")); // "aabbccdd"
  console.log(doubleChar("Adidas")); // "AAddiiddaass"
  console.log(doubleChar("1337")); // "11333377"
  console.log(doubleChar("illuminati")); // "iilllluummiinnaattii"
  console.log(doubleChar("123456")); // "112233445566"
  console.log(doubleChar("%^&*(")); // "%%^^&&**(("

///////////////// Unfinished Loop - Bug Fixing #1 ///////////////////////
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
    }
    
    return newArray;
}
console.log(createArray(1)); // [1]
console.log(createArray(2)); // [1,2]
console.log(createArray(3)); // [1,2,3]
console.log(createArray(4)); // [1,2,3,4]
console.log(createArray(5)); // [1,2,3,4,5]

///////////////// Sum of numbers from 0 to N ///////////////////////
var SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
    if (count < 0) {
        return `${count}<0`;
    }

    let sum = 0;
    let sequence = "";

    for (let i = 0; i <= count; i++) {
        sum += i;
        sequence += i;
        if (i < count) {
            sequence += "+"; 
        } 
    }
    if (count === 0) {
        return `0=0`; 
    } else if (count < 0) {
        return `${count}<0`; 
    } else {
        return `${sequence} = ${sum}`;
        }
    };

    return SequenceSum;

})();
console.log(SequenceSum.showSequence(6)); // 0+1+2+3+4+5+6 = 21
console.log(SequenceSum.showSequence(0)); // 0=0

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

///////////////// Sum of Digits / Digital Root ///////////////////////
function digitalRoot(n) {
    while (n >= 10) { 
        let sum = 0;
        while (n > 0) {
            sum += n % 10; 
            n = Math.floor(n / 10);
        }
        n = sum; 
    }
    return n;
}
console.log(digitalRoot(16));     // 7 (1 + 6 = 7)
console.log(digitalRoot(942));    // 6 (9 + 4 + 2 = 15, 1 + 5 = 6)
console.log(digitalRoot(132189)); // 6 (1 + 3 + 2 + 1 + 8 + 9 = 24, 2 + 4 = 6)
console.log(digitalRoot(493193)); // 2 (4 + 9 + 3 + 1 + 9 + 3 = 29, 2 + 9 = 11, 1 + 1 = 2)

///////////////// Who likes it? ///////////////////////
function likes(names) {
    let lenth = names.length;
    switch(lenth){
        case 0 :
        return  "no one likes this";
        case 1 :
        return `${names[0]} likes this`;
        case 2 : 
        return `${names[0]} and ${names[1]} like this`
        case 3 :
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default :
        return `${names[0]}, ${names[1]} and ${lenth - 2} others like this`
    }
}

  console.log(likes([])); //-->  "no one likes this"
  console.log(likes(["Peter"])); //-->  "Peter likes this"
  console.log(likes(["Jacob", "Alex"])); //-->  "Jacob and Alex like this"
  console.log(likes(["Max", "John", "Mark"])); //-->  "Max, John and Mark like this"
  console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //-->  "Alex, Jacob and 2 others like this"

///////////////// Find The Parity Outlier ///////////////////////
function findOutlier(integers){
    let evenCount = 0;
    let oddCount = 0;
    let lastEven = null;
    let lastOdd = null;

    for (let num of integers) {
        if (num % 2 === 0) {
        evenCount++;
        lastEven = num;
    } else {
        oddCount++;
        lastOdd = num;
    }
    if (evenCount > 1 && oddCount > 0) return lastOdd;
    if (oddCount > 1 && evenCount > 0) return lastEven;
    }
}
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160

///////////////// Stop gninnipS My sdroW! ///////////////////////
function spinWords(string){
    return string
        .split(' ')
        .map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    })
    .join(' '); 
}
console.log(spinWords("Hey fellow warriors")); //--> "Hey wollef sroirraw"
console.log(spinWords("This is a test"));      //--> "This is a test"
console.log(spinWords("This is another test"));//--> "This is rehtona test"