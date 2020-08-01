const cursos = [
        'programação',
        'Algoritmos'
]

function apresentar(curso, indice){
    console.log(`${indice} - ${curso}`)
}

cursos.forEach(apresentar) //Callback
