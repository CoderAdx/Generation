const rl = require('readline-sync');

let selecao = [
    {Codigo: 1, Produto: "Cachorro Quente", Preco: 10.00},
    {Codigo: 2, Produto: "X-Salada", Preco: 15.00},
    {Codigo: 3, Produto: "X-Bacon", Preco: 18.00},
    {Codigo: 4, Produto: "Bauru", Preco: 12.00},
    {Codigo: 5, Produto: "Refrigerante", Preco: 8.00},
    {Codigo: 6, Produto: "Suco de Laranja", Preco: 13.00},
];

console.table(selecao);

let opc = rl.questionInt('Digite um dos Códigos: ');
let quantidade = rl.questionInt('Digite a quantidade: ');
let valorTotal;

switch(opc) {
    case 1:
        valorTotal = quantidade * selecao[0].Preco;
        console.log(`Produto: ${selecao[0].Produto}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 2:
        valorTotal = quantidade * selecao[1].Preco;
        console.log(`Produto: ${selecao[1].Produto}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 3:
        valorTotal = quantidade * selecao[2].Preco;
        console.log(`Produto: ${selecao[2].Produto}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 4:
        valorTotal = quantidade * selecao[3].Preco;
        console.log(`Produto: ${selecao[3].Produto}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 5:
        valorTotal = quantidade * selecao[4].Preco;
        console.log(`Produto: ${selecao[4].Produto}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    case 6:
        valorTotal = quantidade * selecao[5].Preco;
        console.log(`Produto: ${selecao[5].Produto}\nValor Total: R$${valorTotal.toFixed(2)}`);
        break;
    default:
        console.log('Escolha algo válido, florzinha.');
        break;
}
