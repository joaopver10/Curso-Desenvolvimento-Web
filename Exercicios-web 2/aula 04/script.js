function tabuada(){
var tab = document.getElementById('texto')
var res = document.getElementById('res')
var num = Number(tab.value)
res.innerHTML = ''

for(var i = 1; i <= 10; ++i){
    res.innerHTML += `${num} x ${i} = ${num * i}` + '<br>'
    }
}

function apagar(){
    res.innerHTML = ''
}