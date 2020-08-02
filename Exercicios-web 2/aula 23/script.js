class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome
        this._sobrenome = sobrenome
    }
    get nome(){
        return this._nome
    }
    set nome(nome){
        this._nome = nome
    }

    get sobrenome(){
        return this._sobrenome
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome
    }

    falar(msg){
        console.log(`${this.nome} esta falando ${msg}`)
    }
    comer(){
        console.log(`${this.nome}`)
    }
    beber(){
        console.log(`${this.nome}`)
    }
}

class carro{
    constructor(modelo){
        this._marca = "Honda"
        this._modelo = modelo
    }
    get modelo(){
        return this._modelo
    }
    set modelo(modelo){
        this._modelo = modelo
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`)
    }
}

//instanciando objeto -- Forma 1
/*
let curso = new Object()
curso.nome = "Programação"
curso.preco = 25.00

console.log(curso)
curso ['qtd_alunos'] = 999
console.log(curso)
*/

