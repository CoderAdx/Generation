const rl = require('readline-sync');

let n;
let pares = 0;
let impares = 0;



for (let contador = 1; contador <= 10; contador++){
    n = rl.questionInt(`Digite o ${contador}º número: `);

    if(n % 2 === 0){
        pares++
    } else {
        impares++
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);