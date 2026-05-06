let nome = prompt("Digite seu nome (apenas):");

while (nome === "") {
    nome = prompt("Por favor, digite seu nome para prosseguir:");
}

let sobrenome = prompt("Agora digite seu sobrenome (apenas):");

while (sobrenome === "") {
    sobrenome = prompt("Por favor, digite seu sobrenome para prosseguir:");
}

alert("Nome completo: " + nome + " " + sobrenome);