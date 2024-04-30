const prompt = require("prompt-sync")();

// Ler quatro números inteiros
const num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
const num2 = parseInt(prompt("Digite o segundo número inteiro: "));
const num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
const num4 = parseInt(prompt("Digite o quarto número inteiro: "));

// Realizar as operações
const resultado1 = num1 + 25;
const resultado2 = num2 * 3;
const resultado3 = num3 + (num3 * 0.12);
const resultado4 = num1 + num2 + num3;

// Exibir resultados
console.log("Resultados:");
console.log(`1º Número com 25 somado: ${resultado1}`);
console.log(`2º Número triplicado: ${resultado2}`);
console.log(`3º Número com 12% adicionado: ${resultado3}`);
console.log(`4º Número soma dos três primeiros: ${resultado4}`);
