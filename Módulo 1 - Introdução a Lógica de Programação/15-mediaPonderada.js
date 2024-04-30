const prompt = require("prompt-sync")();

let somaProduto = 0;
let somaPesos = 0;
let numero;
let peso;

do {
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para encerrar): "));
    
    if (numero !== 0) {
        peso = parseFloat(prompt("Digite o peso correspondente ao número: "));
        
        somaProduto += numero * peso;
        somaPesos += peso;
    }
} while (numero !== 0);

if (somaPesos === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    let mediaPonderada = somaProduto / somaPesos;
    console.log(`A média ponderada dos números digitados é: ${mediaPonderada.toFixed(2)}`);
}
