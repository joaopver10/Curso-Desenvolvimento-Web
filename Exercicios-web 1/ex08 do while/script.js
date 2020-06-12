function tabuada(){
    var numero = document.getElementById('ntxt')
    var res = document.getElementById('res')

    if(numero.value.length == 0){
        window.alert('preencha o dado por favor')
    }else{     
        var n = Number(numero.value)
        var i = 1
        res.innerHTML = ''  
        do{ // vai executar esses comandos enquanto while for true, faz esse bloco e depois testa
            var item = document.createElement('option') // cria um elemento option para o select
            item.text += `${n} x ${i} = ${n*i}` // item.text recebe a multiplicação
            item.value = `res${i}` // cada item no option tem um value
            res.appendChild(item) // a tabuada aparece dentro do select        
            i++ // faz o incremento
        } while (i <= 10){ // enquanto i for menor que 10 ele vai fazer um laço 

        }
    }
}