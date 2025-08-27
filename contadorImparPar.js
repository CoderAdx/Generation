const rl = require('readline-sync');

let n;
let par = 0;
let impar = 0;



for (let contador = 1; contador <= 10; contador++){
    n = rl.questionInt(`Digite o ${contador}º número: `);

    if(n % 2 === 0){
        par++
    } else {
        impar++
    }
}

console.log(`Total de números pares: ${par}`);
console.log(`Total de números ímpares: ${impar}`);