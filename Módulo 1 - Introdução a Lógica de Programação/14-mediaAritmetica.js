const prompt = require("prompt-sync")();

let soma = 0;
let quantidade = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para encerrar): "));

    if (numero !== 0) {
        soma += numero;
        quantidade++;
    }
} while (numero !== 0);

if (quantidade === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    let media = soma / quantidade;
    console.log(`A média dos números digitados é: ${media.toFixed(2)}`);
}
