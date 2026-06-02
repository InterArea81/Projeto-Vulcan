// ===== FUNÇÃO MOTOR =====
function verificarMotor(velocidadeAtual, aceleracao) {
    const velocidadeFinal = velocidadeAtual + aceleracao;

    if (velocidadeFinal > 100) {
        return "ALERTA DE SOBRECARGA";
    } else {
        return "Sistema Seguro";
    }
}

// ===== FUNÇÃO TEMPERATURA =====
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

// ===== DADOS =====
const velocidadeAtual = 60;
const aceleracao = 30;
const temperaturas = [40, 45, 50, 55, 60];

// ===== PROCESSAMENTO =====
const statusMotor = verificarMotor(velocidadeAtual, aceleracao);
const statusTemp = verificarTemperatura(temperaturas);

// ===== SAÍDA =====
console.log("===== PAINEL DO ROBÔ =====");

console.log("\n--- MOTOR ---");
console.log("Velocidade Atual:", velocidadeAtual);
console.log("Aceleração:", aceleracao);
console.log("Velocidade Final:", velocidadeAtual + aceleracao);
console.log("Status:", statusMotor);

console.log("\n--- TEMPERATURA ---");
console.log("Leituras:", temperaturas);
console.log("Status:", statusTemp);

console.log("\n==========================");