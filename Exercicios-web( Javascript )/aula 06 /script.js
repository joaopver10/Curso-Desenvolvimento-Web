function pessoa() {
    return {
    nome: "vanessa",
    sobrenome: "oliveira"
    }
}

console.log(pessoa())


function produto (nome, preco){
    return {
    nome,
    preco,
    desconto: 0.10 
    }
}
    console.log(produto("cafeteira", 2.000))