function getPreco (imposto = 0, moeda = "R$") {
    return  `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "notebook",
    preco: 4500,
    desc: 0.20,
    getPreco
}
console.log(produto.getPreco())