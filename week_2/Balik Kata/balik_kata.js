function balikKata(str) {
    var balikKata = "";
    for (var i = str.length - 1; i >= 0; i--) {
        balikKata = balikKata + str[i];
    }
    return balikKata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS