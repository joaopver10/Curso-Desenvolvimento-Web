   //matriz
   var alunos = [
    {nome: 'Maria', notas: [2,5,8,9]},
    {nome: 'José', notas: [2,1,5,8]},
    {nome: 'João', notas: [1,5,3,2]},
    {nome: 'Ana', notas: [4,5,3,8]},
    {nome: 'lucia', notas: [2,1,8,5]}
]


for(var i = 0; i < alunos.length; i++){
    var notas = alunos[i].notas
    var total = 0
    for(var j = 0; j < notas.length; j++){
        total += notas[j]
        
    }
    var media = total / notas.length
    
}





