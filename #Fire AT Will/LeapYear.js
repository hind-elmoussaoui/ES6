function isLeapYear(year){
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            return true;
        }else{
            return false;
        }
}
console.log(isLeapYear(400));
console.log(isLeapYear(1999));
console.log(isLeapYear(2024));
console.log(isLeapYear(2002));
