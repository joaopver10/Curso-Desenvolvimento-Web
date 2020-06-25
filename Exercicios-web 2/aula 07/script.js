function calc(){
    var largura = Number(prompt('Digite a largura'))
    var altura = Number(prompt('Digite a altura'))

    try{
    var msg = calculo(altura, largura)
    }catch(e){
        alert(e)
        return 
    }
    escreve(`A área total é de: ${msg}`)
}
calc()

function calculo(altura, largura){

    if(isNaN(largura) || isNaN(altura)){
        throw new Error('impossivel continuar, digite numeros')
    }

    var multi = altura * largura
    return multi
}


function escreve(mensagem){
    var res = document.getElementById('res')
    res.innerHTML = mensagem
}