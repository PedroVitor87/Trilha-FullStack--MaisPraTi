let contador = 0;
let numero = 101;

while (contador <= 50) {
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        console.log(numero);
        contador++;
    }
    numero++;
}
