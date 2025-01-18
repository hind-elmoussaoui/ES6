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
