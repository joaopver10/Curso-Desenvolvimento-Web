var num = Number(prompt('Digite um numero'))

resposta()

function resposta(){
    var res = document.getElementById('res')
    res.innerHTML = num
}

function soma(){
    var n2 = Number(prompt('Digite outro numero'))
    num = num + n2
    resposta()
}

function divi(){
    var n2 = Number(prompt('Digite outro numero'))
    num = num / n2
    resposta()
}

function multi(){
    var n2 = Number(prompt('Digite outro numero'))
    num = num * n2
    resposta()
}

function subt(){
    var n2 = Number(prompt('Digite outro numero'))
    num = num - n2
    resposta()
}
