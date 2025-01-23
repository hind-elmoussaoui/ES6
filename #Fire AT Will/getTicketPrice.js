function getTicketPrice(age){
    if(age <= 12){
        return "10 $";
    }else if(age >= 13 && age <= 17){
        return "15 $";
    }else{
        return "20 $";
    }
}
console.log(getTicketPrice(40));
console.log(getTicketPrice(5));
console.log(getTicketPrice(12));
console.log(getTicketPrice(13));
