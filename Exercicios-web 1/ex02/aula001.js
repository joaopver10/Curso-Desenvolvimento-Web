function nacionalidade(){
    var veri = document.getElementById("nacio")
    var res =  window.document.getElementById("res")
    var resultado = (veri.value)
    res.innerHTML = `Sua nacionalidade é ${resultado}`
        if (resultado == 'Brasil' && 'Estados unidos'){
            res.innerHTML += '<p> Você não é considerado estrangeiro <p>'
        }
        else{
            res.innerHTML += '<p> Você é um estrangeiro <p>'
        }

}