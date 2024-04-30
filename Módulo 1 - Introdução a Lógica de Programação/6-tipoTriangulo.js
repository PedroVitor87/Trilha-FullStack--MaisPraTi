const prompt = require("prompt-sync")();

const ladoA = Number(prompt("Digite o comprimento do lado A: "));
const ladoB = Number(prompt("Digite o comprimento do lado B: "));
const ladoC = Number(prompt("Digite o comprimento do lado C: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero: todos os lados são iguais.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles: possui dois lados iguais.");
    } else {
        console.log("Triângulo escaleno: todos os lados são diferentes.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}
