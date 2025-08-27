const rl = require('readline-sync');

let n;

n = rl.questionInt('Digite um número: ');

if (n === 0){
    console.log('O número 0 é par e nem é positivo nem negativo');
} else {
    if(n % 2 === 0){
        if(n > 0) {
            console.log(`O número ${n} é par e positivo`)
        } else {
            console.log(`O núemro ${n} é par e negarivo`)
        }
    } else {
        if(n > 0) {
            console.log(`O núemreo ${n} é ímpar e positivo`)
        } else{
            console.log(`O número ${n} é ímpar e negativo`)
        }
    }
}