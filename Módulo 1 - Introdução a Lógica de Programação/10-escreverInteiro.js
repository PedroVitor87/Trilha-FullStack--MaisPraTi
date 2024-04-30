const prompt = require("prompt-sync")();

let numero = Math.trunc(prompt("Digite um número: "));

if (isNaN(numero)) {
    console.log("Digite um número inteiro.");
}

for (i=1; i<=10; i++){
    console.log(numero);
}