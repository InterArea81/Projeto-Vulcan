function verificarTemperatura(temperaturas) {
    let soma = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        soma = soma + temperaturas[i];
    }

    let media = soma / temperaturas.length;

    if (media > 50) {
        return "Ligar resfriamento";
    } else {
        return "Temperatura normal";
    }
}

console.log(verificarTemperatura([40, 45, 50, 55, 60]));