const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Digite a nota da primeira avaliação: "));
const nota2 = Number(prompt("Digite a nota da segunda avaliação: "));

const mediaSemestral = (nota1 + nota2) / 2;

if (mediaSemestral >= 6.0) {
    console.log(`Média semestral: ${mediaSemestral.toFixed(2)}`);
    console.log("PARABÉNS! Você foi aprovado");
}
