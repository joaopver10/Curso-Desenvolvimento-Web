var num = document.getElementById('ntxt')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var adic = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function add(){
            
    if(isNumero(num.value) && !isLista(num.value, adic)){
        adic.push(Number(num.value))        
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
    
        window.alert('Valor inválido ou já encontrado na lista')
     
    }
    num.value = ''
    num.focus()
}    

function fim(){
    if(adic.length == 0){
        window.alert('Adicione valores para finalizar')
    }else{
        let tot = adic.length
        let maior = adic[0]
        let menor = adic[0]
        let soma = 0
        let media = 0
        for(let pos in adic){
        soma += adic[pos]
        if (adic[pos] > maior)
            maior = adic[pos]
        if(adic[pos] < menor)
            menor = vales[pos]
    }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior numero digitado é ${maior} </p>`
        res.innerHTML += `<p>O menor numero digitado é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}