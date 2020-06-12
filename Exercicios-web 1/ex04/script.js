function carregar() {  
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#D0AE6F'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#D8A037'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#45374A'
    }
        
}