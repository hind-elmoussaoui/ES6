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
