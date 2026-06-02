function verificarMotor(velocidadeAtual, aceleracao) {
    const velocidadeFinal = velocidadeAtual + aceleracao;

    if (velocidadeFinal > 100) {
        return "ALERTA DE SOBRECARGA";
    } else {
        return "Sistema Seguro";
    }
}

const resultado = verificarMotor(60, 30);

console.log("=== PAINEL DO MOTOR ===");
console.log("Velocidade Final:", 60 + 30);
console.log("Status:", resultado);