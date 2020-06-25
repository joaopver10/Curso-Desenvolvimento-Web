var num = Number(prompt('Digite um numero'))

resposta(num)

function iniciar(simbolo){
    var n1 = document.getElementById('res').innerHTML
    var n2 = Number(prompt('digite outro numero'))
    var msg = calcular(simbolo, Number(n1), n2)
    resposta(msg)
}

function resposta(mensagem){
    var res = document.getElementById('res')
    res.innerHTML = mensagem
}

function calcular(simbolo, n1, n2){
    var numCalc = null;

    switch(simbolo){

        case '+':
            numCalc = n1 + n2
            break

        case '-':
            numCalc = n1 - n2
            break

        case '*':
            numCalc = n1 * n2
            break        

        case '/':
            numCalc = n1 / n2
            break
         
    }
    return numCalc
}

