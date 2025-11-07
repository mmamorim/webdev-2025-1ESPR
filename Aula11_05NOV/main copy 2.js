
console.log("oi gente");

let fazAlgo = (coisa) => {
    console.log("Estou executando fazAlgo...", coisa);
    return "resposta"
}

let bomDia = (n) => {
    console.log("Bom dia ", n);
}

function oi(nome, acao) {
    console.log("oi ", nome);
    acao(nome)
}


fazAlgo(12)
//bomDia("Ana")
//boaTarde("Bia")
oi("Ana", bomDia)
oi("Bia", (n) => {
    console.log("Good Night", n);
})
oi("João", (n) => {
    console.log("dfkdfkdjfkdf", n);
})
