const rls = require('readline-sync');

let back = 0;
let frontM = 0;
let mobileH40Mais = 0;
let fullNb30Menos = 0;

let total = 0;
let soma = 0;

let idade;
let genero;
let dev;

while (true) {
 idade = rls.questionInt('Idade: ');
 genero = rls.questionInt('Identidade de: \n1 - Mulher Cis\n2 - Homem Cis\n3 - Não Binário\n4 - Mulher Trans\n5 - Homem Trans\n6 - Outros\nDigite: ');
 dev = rls.questionInt('Pessoa Desenvolvedora:\n1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack\nDigite:');

 total++;
 soma += idade;

 if(dev === 1){
    back++;
 }

 if((genero === 1 || genero === 4) && dev === 2){
    frontM++;
 }

 if((genero === 2 || genero === 5) && dev === 3 && idade > 40) {
    mobileH40Mais++;
 }

 if(genero === 3 && dev === 4 && idade < 30){
    fullNb30Menos++;
 }

 let continuar = rls.question('Deseja continuar (S/N): ').toUpperCase();
 if(continuar === "N") break;

}


console.log("\n===== RESULTADOS =====");
console.log(`Total de pessoas desenvolvedoras Backend: ${back}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${frontM}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${mobileH40Mais}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${fullNb30Menos}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${total}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${(soma / total).toFixed(2)}`);

