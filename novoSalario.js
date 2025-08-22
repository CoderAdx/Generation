const leia = require("readline-sync");

let salario;
let abono;
let novoSalario;

salario = leia.questionInt("\n Digite seu salario: ");
abono = leia.questionInt("\n Dite seu abono: ");
novoSalario = salario + abono;

console.log(`Seu novo salario eh de: R$ ${novoSalario.toFixed(2)}`)
