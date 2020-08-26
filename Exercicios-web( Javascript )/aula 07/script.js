function Pessoa (nome){
    this.nome = nome

    this.falar = function (){
        console.log(`meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('maria')
pessoa1.falar() 