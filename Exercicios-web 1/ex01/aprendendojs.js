//var nome = window.prompt('Qual o seu nome?')
//var idade = Number.parseInt(window.prompt('Qual é a sua idade?'))
//var nota = Number.parseFloat(window.prompt('Qual é a sua nota?'))
 // document.write(`Seja bem vindo <strong>${nome}</strong>, vi que você tem ${idade} anos e a sua nota foi de ${nota}`)


 function somar(){
 var s1 = window.document.querySelector('#soma1')
 var s2 = window.document.querySelector("#soma2")
 var res = window.document.getElementById('res')
 var n1 = Number(s1.value)
 var n2 = Number(s2.value)
 var s = n1 + n2
 res.innerHTML = `O resultado entre a soma de ${n1} e ${n2} é de: <strong> ${s} </strong>`
}


function dividir(){
var d1 = document.querySelector('#dividir1')
var d2 = document.querySelector('#dividir2')
var res1 = document.querySelector('#res1')
var dividir1 = Number(d1.value)
var dividir2 = Number(d2.value)
var d = dividir1 / dividir2
res1.innerHTML = `O resultado entre a divisão ${dividir1} e ${dividir2} é de: <strong> ${d} </strong>`
}

function multiplicar(){
 var m1 = window.document.getElementById('multi1')
 var m2 = window.document.getElementById('multi2')
 var res2 = window.document.getElementById('res2')
 var multi1 = Number(m1.value)
 var multi2 = Number(m2.value)
 var m = multi1 * multi2
 res2.innerHTML = `O resultado da multiplicação entre ${multi1} e ${multi2} foi de: <strong> ${m} </strong>`
}

