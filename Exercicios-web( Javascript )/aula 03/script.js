let nota = [5.4, 6.3, 5.4, 7.2, 9.0, 10.0, 5.9, 5.3]

let nbaixa = []

for(let i in nota){
    if(nota[i] < 7){
        nbaixa.push(nota[i])
    }
}
console.log(nbaixa)

nbaixa2 = nota.filter(function (nota){
    return nota < 7
})

console.log(nbaixa2)

nbaixa3 = nota.filter(nota => nota < 7)
    console.log(nbaixa3)
