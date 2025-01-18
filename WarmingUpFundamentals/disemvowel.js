///////////////// trolls à désévocalisation ///////////////////////
function disemvowel(str){
    return [...str].filter(c => !"aeiouAEIOU".includes(c)).join('');
}
console.log(disemvowel("This website is for losers LOL!"));
// "Ths wbst s fr lsrs LL!"
console.log(disemvowel("Ce site Web est pour les perdants MDR!"));
// "C st Wb st pr ls prdnts MDR!"