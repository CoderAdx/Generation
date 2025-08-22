const leia = require("readline-sync");

let nota1;
let nota2;
let nota3;
let nota4;
let mediaFinal;

nota1 = leia.questionInt("\n Digite sua 1º nota: ");
nota2 = leia.questionInt("\n Digite sua 2º nota: ");
nota3 = leia.questionInt("\n Digite sua 3º nota: ");
nota4 = leia.questionInt("\n Digite sua 4º nota: ");

mediaFinal = (nota1 + nota2 + nota3 + nota4 ) / 4;

console.log(`Sua media final foi de: ${mediaFinal}`)
