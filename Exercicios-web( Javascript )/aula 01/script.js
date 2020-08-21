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
 