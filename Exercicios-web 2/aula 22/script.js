//função construtora
function pessoa(m, s){
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30
    let peso = 0.5
    let idade = 0
    let nome = n
    let sexo = s

    //atributo publico pode ser acessado fora da função construtora
    this.raca = 'humano'
    
    // método privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function(){
        console.log(`nome: ${nome}, Idade: ${idade}, peso: ${peso}, altura: ${altura}, sexo ${sexo}`)
    }
    // metodo publico conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1
        imprimir_dados()
        
    }
    this.getIdade = function(){
        return idade
    }
}