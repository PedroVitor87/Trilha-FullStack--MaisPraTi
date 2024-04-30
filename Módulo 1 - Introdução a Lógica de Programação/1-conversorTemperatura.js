const prompt = require("prompt-sync")();

while (true) {
    console.log("Escolha uma opcao:");
    console.log("1. Converter para Fahrenheit");
    console.log("2. Converter para Celsius");
    console.log("3. Sair");

    let opcao = prompt("Opção: ");

    switch (parseInt(opcao)) {
        case 1:
            let tempCelsius = parseFloat(prompt("Temperatura em Celsius: "));
            let conversaoParaFahr = (tempCelsius * 9) / 5 + 32;
            console.log(conversaoParaFahr + " °F");
            break;
        case 2:
            let tempFahrenheit = parseFloat(prompt("Temperatura em Fahrenheit: "));
            let conversaoParaCels = ((tempFahrenheit - 32) * 5) / 9;
            console.log(conversaoParaCels + " °C");
            break;
        case 3:
            console.log("Saindo do programa...");
            process.exit(0);
        default:
            console.log("Número incorreto, por favor, digite as opções 1, 2 ou 3");
    }
}
