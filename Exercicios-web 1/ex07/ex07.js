function contar(){
    var inicio = document.getElementById('initxt')
    var fim = document.getElementById('fimtxt') 
    var pula = document.getElementById('pulatxt')
    var res = document.getElementById('res')
    //  Verificar o valor digitado, se for deixado espaço em branco exibe mensagem de erro
    if (inicio.value.length == 0 || fim.value.length == 0 || pula.value.length == 0){
        res.innerHTML = 'impossivel contar'
        window.alert('Está faltando dados')
    } else{ // Caso esteja tudo certo executa essa linha fazendo conversão dos dados para numeros
        res.innerHTML = 'contando: <br>'
        var i = Number(inicio.value) //convertido o valor para numero
        var f = Number(fim.value)
        var p = Number(pula.value)
     if( i < f){ //se o dado inicial for menor que o final ele executa esse codigo 
        for( var cont = i; cont <= f ; cont += p ){ // cont recebe o valor inicial, se for verdade ele parte pro incremento do valor digitado 
            res.innerHTML +=  `${cont} `
            } 
        }else{// se não, essa linha é executada fazendo a contagem decrescente
            for(var cont = i; cont >= f ; cont -= p) { //se o dado inicial for maior que o final ele faz o inverso
                res.innerHTML += `${cont} `
            }
        }
    }

}