const leia = require("readline-sync");

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = leia.questionInt("\nDigite seu salario bruto: ");
adicionalNoturno = leia.questionInt("Digite seu adicional noturno: ");
horasExtras = leia.questionInt("Digite suas horas extras: ");
descontos = leia.questionInt("Digite seus descontos: ");
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`Seu salario liquido eh de: ${salarioLiquido}`);
