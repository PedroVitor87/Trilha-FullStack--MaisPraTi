const prompt = require("prompt-sync")();

const totalEleitores = Number(prompt("Informe o total de eleitores: "));
if (totalEleitores <= 0) {
    console.log("O número total de eleitores deve ser maior que zero.");
} else {
    let votosBrancos = Number(prompt("Votos brancos: "));
    let votosNulos = Number(prompt("Votos nulos: "));
    let votosValidos = Number(prompt("Votos válidos: "));

    const totalVotos = votosBrancos + votosNulos + votosValidos;
    if (totalVotos > totalEleitores) {
        console.log("A quantidade total de votos excedeu o número total de eleitores.");
    } else {
        // Verificar se os votos são válidos (não negativos)
        if (votosBrancos < 0 || votosNulos < 0 || votosValidos < 0) {
            console.log("Digite um valor igual ou maior que 0.");
        } else {
            let abstencao = totalEleitores - totalVotos;

            let percentualBrancos = (votosBrancos / totalEleitores) * 100;
            let percentualNulos = (votosNulos / totalEleitores) * 100;
            let percentualValidos = (votosValidos / totalEleitores) * 100;
            let percentualAbstencao = (abstencao / totalEleitores) * 100;

            console.log(`${percentualBrancos.toFixed(2)}% de votos Brancos.`);
            console.log(`${percentualNulos.toFixed(2)}% de votos Nulos.`);
            console.log(`${percentualValidos.toFixed(2)}% de votos Válidos.`);
            console.log(`${percentualAbstencao.toFixed(2)}% de abstenção.`);
        }
    }
}
