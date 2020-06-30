var produto1 = {
    nome: 'borracha',
    preco: 2.00, 
    estoque: 10
}

var produto2  = {
    nome: 'caneta',
    preco: 1.50, 
    estoque: 5 
}

var produto3 = {
    nome: 'lapís',
    preco: 1.20, 
    estoque: 'sem no estoque'
}


var estoque = new Array(produto1, produto2, produto3)

console.log(estoque)