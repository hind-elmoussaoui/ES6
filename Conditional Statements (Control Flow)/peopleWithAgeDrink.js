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
