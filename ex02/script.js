let entrada = prompt('Digite notas entre 0 e 10 para cálculo da média (valores fora dessa faixa ou "ok" encerram o programa):');
let nota = Number(entrada);
let soma = 0;
let quantidade = 0;

while (entrada !== "ok" && nota >= 0 && nota <= 10) {
    soma += nota;
    quantidade++;

    entrada = prompt('Nota ' + quantidade + ' (números negativos ou "ok" encerram o programa):');
    nota = Number(entrada);
}

if (quantidade > 0) {
    let media = soma / quantidade;
    alert("Média das notas: " + media);
} else {
    alert("Nenhuma nota válida foi digitada.");
}