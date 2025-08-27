const rls = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 7, 8, 10, 6];

console.log(`Vetor: ${vetor}`);

let num, posicao;

num = rls.questionInt('Digite o núemro que você deseja encontrar: ');
posicao = vetor.indexOf(num);

if(posicao !== -1){
    console.log(`O ${num} está localizado na posição: ${posicao}`);
} else{
    console.log(`o número ${num} não foi encontrado!`);
}