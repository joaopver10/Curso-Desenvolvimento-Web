var jogador 
var computador 
var escolhe = 'par'

function sortear(max){
    return Math.floor(Math.random() * max)
}

function jogo(){
  jogador = document.getElementById('num').value
  computador = sortear(5)
  jogador = Number(jogador)
  computador = Number(computador)

  var total = computador + jogador
  var resultado = ( total % 2 === 0 ) ? 'par' : 'impar'

  
    
    if (!jogador){
        alert('digite algum numero por favor')
    }else{
        verificar(resultado)
    }

}

function verificar(resultado){
    if (escolhe == resultado){
        alert('eu ganhei')
    }else{
        alert('o computador ganhou')
    }
}