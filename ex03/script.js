let entrada = prompt('Digite os valores de suas últimas compras para somá-las (números negativos, "0" ou "ok" encerra o programa):');
let compra = Number(entrada);
let soma = 0;
let quantidade = 0;

while (entrada !== "ok" && !isNaN(compra) && compra > 0) {
    soma += compra;
    quantidade++;

    entrada = prompt('Compra ' + (quantidade + 1) + ' (números negativos, "0" ou "ok" encerra o programa):');
    compra = Number(entrada);
}

if (quantidade > 0) {
    alert("Total das compras: " +soma+ " reais.");
} else {
    alert("Nenhum valor válido foi digitado.");
}