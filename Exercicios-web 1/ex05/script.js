function verificar() {  
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO, PREENCHA DA MANEIRA CORRETA]')
   } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if (idade >= 0 && idade <10){
               //criança
               img.setAttribute('src','criançam.png')
           } else if (idade < 50){
               //adulto
               img.setAttribute('src', 'homem.png')
           } else{
               //idoso
               img.setAttribute('src','velho.png')
           }
        
        }else if(fsex[1].checked){
            genero= 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'criançaa.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else{
                //idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade verificada, ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 

}