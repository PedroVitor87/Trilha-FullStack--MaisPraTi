const prompt = require("prompt-sync")();

let codigoOrigem = Number(prompt("Digite o código de origem do produto: "));

if (isNaN(codigoOrigem)) {
    console.log("Digite um número como código de origem.");
} else {
    if (codigoOrigem >= 1 && codigoOrigem <= 4) {
        switch(codigoOrigem) {
            case 1:
                console.log("O produto é da Região Sul");
                break;
            case 2:
                console.log("O produto é da Região Norte");
                break;
            case 3:
                console.log("O produto é da Região Leste");
                break;
            case 4:
                console.log("O produto é da Região Oeste");
                break;
        }
    } else if (codigoOrigem >= 5 && codigoOrigem <= 6) {
        console.log("O produto é da Região Nordeste");
    } else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
        console.log("O produto é da Região Sudeste");
    } else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
        console.log("O produto é da Região Centro-Oeste");
    } else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
        console.log("O produto é da Região Nordeste");
    } else {
        console.log("Produto Importado");
    }
}
