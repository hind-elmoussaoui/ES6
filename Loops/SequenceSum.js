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
