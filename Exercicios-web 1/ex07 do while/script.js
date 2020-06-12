function contar(){
    var ini = document.getElementById('itxt')
    var fin = document.querySelector('#ftxt')
    var pas = document.getElementById('ptxt')
    var res= document.getElementById('res')

    
    if(ini.value.length == 0 || fin.value.length == 0 || pas.value.length ==0){
        window.alert('Impossivel continuar, preencha os dados')
        res.innerHTML = "não foi possivel contar"
    }else{
        res.innerHTML = `resultado: `
        var i = Number(ini.value)
        var f = Number(fin.value)
        var p = Number(pas.value)
    
        if ( i <= f){
            do{
                res.innerHTML += `${i} `
                i += p
            }while(i <= f);
        }else{
            do{
                res.innerHTML += `${i} `
                i -= p

            }while( i >= f)

        }
        
        
    }
}