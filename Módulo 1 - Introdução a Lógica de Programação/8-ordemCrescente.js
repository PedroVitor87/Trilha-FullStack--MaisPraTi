const prompt = require("prompt-sync")();

let valor1, valor2;
do {
    valor1 = Number(prompt("Digite o primeiro valor: "));
    valor2 = Number(prompt("Digite o segundo valor: "));

    if (valor1 === valor2) {
        console.log("Os valores fornecidos são iguais. Por favor, insira valores diferentes.");
    }
} while (valor1 === valor2);

if (valor1 < valor2) {
    console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`);
} else {
    console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`);
}
