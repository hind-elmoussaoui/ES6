function weatherAdvice(temperature, isRaining) {
    switch (true) {
        case temperature < 10 && isRaining:
            return "Il pleut et il fait froid, prenez un manteau imperméable!";
        case temperature < 10 && !isRaining:
            return "Il fait froid, prenez un manteau!";
        case temperature >= 10 && temperature <= 20 && isRaining:
            return "Il pleut mais pas trop froid, prenez un parapluie!";
        case temperature > 20 && isRaining:
            return "Il pleut mais chaud, prenez un parapluie léger!";
        default:
            return "Il fait beau, pas besoin d'ombrelle!";
    }
}
console.log(weatherAdvice(5, true)); // "Il pleut et il fait froid, prenez un manteau imperméable!"
console.log(weatherAdvice(15, false)); // "Il fait beau, pas besoin d'ombrelle!"
