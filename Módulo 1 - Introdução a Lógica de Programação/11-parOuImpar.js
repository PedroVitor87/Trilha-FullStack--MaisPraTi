const prompt = require("prompt-sync")();

console.log("Digite valores inteiros (digite '0' para encerrar):");

let valor = parseInt(prompt("Digite um valor inteiro: "));

while (valor > 0) {
    if (valor % 2 === 0) {
        console.log(`${valor} é PAR`);
    } else {
        console.log(`${valor} é ÍMPAR`);
    }

    valor = parseInt(prompt("Digite um valor inteiro: "));
}

console.log("Programa encerrado.");
