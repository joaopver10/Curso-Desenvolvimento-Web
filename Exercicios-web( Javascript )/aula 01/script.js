<<<<<<< HEAD
// Gerar valor padrão na função (caso precise criar variaveis com valores padrões esse é o melhor metodo)
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(2,3,4))

// ECMASCRIPT 2015 

function soma2(a = 1, b = 1, c = 1){
    return a + b + c
}
=======
 /* function end(){
    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
       };
       console.log(`O usúario mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero} `)

       return endereco     
 }

 end()
*/

>>>>>>> 9f9f50d9d281f5f7d986af999f7be6e9e70fe01c
