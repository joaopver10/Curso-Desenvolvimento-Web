function Carro (velocidadeMax = 200, delta = 50){
    //atb privado
    
    let velAtual = 0

    this.acelerar = function() {
        if( velAtual + delta <= velocidadeMax){
            velAtual += delta
        } else {
            velAtual = velocidadeMax
        }

        this.getVelAtual = function (){
            return velAtual
        }
    }
}