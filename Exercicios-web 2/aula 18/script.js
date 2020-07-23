var altura = Number(prompt('Digite uma altura'))
var largura = Number(prompt('Digite uma largura'))

function alerta(){
    var calculo = calcula(altura, largura)
    alert(calculo)
}
alerta()

function calcula(l, a){
    return (l * a)
}