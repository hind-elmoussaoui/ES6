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
