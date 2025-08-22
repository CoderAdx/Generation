const leia = require("readline-sync");

let n1;
let n2;
let n3;
let n4;
let diferenca;

n1 = leia.questionInt("\nDigite o n1: ");
n2 = leia.questionInt("Digite n2: ");
n3 = leia.questionInt("digite o n3: ");
n4 = leia.questionInt("Digite o n4: ");
diferenca = (n1 * n2) - (n3 * n4);

console.log(`A diferença do produto eh: ${diferenca}`);