var largura = Number(prompt('Digite a largura'))
var altura = Number(prompt('Digite a altura'))

function mostraAlert(){
    var calculo = calcula(largura, altura)
    alert(`a área da multiplicação entre ${largura} x ${altura} foi de ${calculo}`)
}


function mostraTela(){
    var calculo = calcula(largura, altura)
    var res = document.getElementById('res')
    res.innerHTML += `a área da multiplicação entre ${largura} x ${altura} foi de ${calculo}`
}

function calcula(l, a){
    return(l * a)
}