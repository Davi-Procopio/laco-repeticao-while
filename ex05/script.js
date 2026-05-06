let saldo = Number(prompt("Digite o saldo atual disponível:"));

while (saldo > 0) {

    let entrada = prompt("Seu saldo é R$" + saldo + ". Quanto deseja sacar? (digite 'ok' para encerrar)");

    if (entrada === "ok") {
        alert("Seu saldo permanece em R$" + saldo + ".");
        break;
    }

    let saque = Number(entrada);

    if (saque > 0 && saque <= saldo) {
        saldo = saldo - saque;
        alert("Saque realizado! Saldo restante: R$" + saldo);
    } else {
        alert("Valor inválido ou saldo insuficiente.");
    }
}

if (saldo === 0) {
    alert("Saldo zerado. Encerrando o programa.");
}