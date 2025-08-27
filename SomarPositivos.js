const rls = require('readline-sync');

let soma = 0;
let n;

do{
    n = rls.questionInt('Digite um número: ');

    if(n > 0) {
        soma += n;
    }
} while (n !==0);

console.log(`\nA soma dos núemros positivos é: ${soma}`)