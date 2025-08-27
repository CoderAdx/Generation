const rl = require('readline-sync'); 

let a, b, c; 

console.log('\n ---------   / /   --------- \n')
a = rl.questionInt('Digite o primeiro valor: ');
b = rl.questionInt('Digite o seguno valor: ');
c = rl.questionInt('Digite o terceiro valor: ');

let soma;
soma = a+b;

if(soma > c) {
    console.log('A soma de A+B é maior que C');
} else if(soma < c) {
    console.log('A soma de A+B é menor que C');
} else if(soma == c){
    console.log('A soma de A+B é igual a C');
}