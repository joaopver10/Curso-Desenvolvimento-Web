let btn = document.querySelector('button')

btn.onclick = function(){
    let texto = ''
    let campo = document.querySelector('input').value
    let elementop= document.createElement('p')
    
    elementop.setAttribute('class', 'class-p')
    
    if(campo !== ""){
        elementop = document.createTextNode(campo)
    }else{
        elementop = document.createTextNode('veio vazio...')
    }
    let div = document.querySelector('#app')
    div.appendChild(elementop)
}