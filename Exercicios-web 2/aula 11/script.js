var n1 = "0"
var op = null
var n2 = ''

function incluirDigito(digito){
    if(op !== null){
        n2 += digito
        mostrar(n2) 
    }else{

        if(n1 === '0'){
            n1 = digito
        }else{
            n1 += digito
        }
        mostrar(n1)
    }
}

var clico = false
function finalizarCalculo(){
    clico = true
    var resultado = calcular()
    n1 = resultado
    mostrar(n1)
    
}

function calcular(){
    var numcalc = 0 
    var num1 = Number(n1)
    var num2 = Number(n2)

    switch(op){

        case '+':
            numcalc = num1 + num2
            break
        case '/':
            numcalc = num1 /  num2
            break
        case '-':
            numcalc =  num1 -  num2
            break
        case '*':
            numcalc =  num1 *  num2
            break
    }
    return numcalc
}


function iniciarCalculo(simbolo){
    if(clico){
        clico = false
        n2 = ''
    }

    if( op === null || n2 === ''){
        op = simbolo
    }else{
        var resultado = calcular()
        n1 = resultado
        op = simbolo
        n2 = ''
        mostrar(n1)
    }    
}


function mostrar(valor){
    var msg = document.getElementById('display')
    msg.innerHTML = valor
}

