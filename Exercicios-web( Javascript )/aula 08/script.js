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

const carro = { preco: 4500, desc: 0.15}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(carro, [0.17, "$"]))

const produto2 = {
    nome: "papel",
    preco: 5.50,
    desc: 0.5
}

console.log(getPreco.call(produto2))