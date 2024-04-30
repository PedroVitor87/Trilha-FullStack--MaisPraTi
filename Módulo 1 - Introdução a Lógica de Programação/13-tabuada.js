const prompt = require("prompt-sync")();

for (let i = 0; i < 5; i++) {
    let N = parseInt(prompt("Digite um valor para N ou digite 0 para encerrar."));
    if(N == 0){
        return console.log("Encerrando programa...");
    }
    console.log(`Tabuada de ${N}:`);

    for (let j = 1; j <= N; j++) {
        console.log(`${j} x ${N} = ${j * N}`);
    }
}
