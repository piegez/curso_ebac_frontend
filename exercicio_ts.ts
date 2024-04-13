function multiplicando(numeroPrimeiro: number, numeroSegundo: number): number {
    return numeroPrimeiro * numeroSegundo;
}

const resultado1 = multiplicando(2, 3);
console.log('Resultado: ' + resultado1);

////

function saudacao(nome: string) {
    return "Olá "+ nome;
}

const primeiraPessoa = saudacao("Maria");
console.log(primeiraPessoa);