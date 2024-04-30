const prompt = require("prompt-sync")();

const quantidadeMacas = Number(prompt("Digite o número de maçãs compradas: "));

let precoPorDuzia = 0.25; 
let precoPorUnidade = 0.30;

let valorTotal;
if (quantidadeMacas >= 12) {
    valorTotal = quantidadeMacas * precoPorDuzia;
} else {
    valorTotal = quantidadeMacas * precoPorUnidade;
}

console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`);
