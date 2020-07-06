/* var alunos = [
    {nome: 'daniel', id: 112233, endereco: 'rua faz de conta 2, ap 3, são paulo SP'},
    {nome: 'josé', id: 112244, endereco: 'rua belezura 5, Sao paulo'},
    {nome: 'joão', id: 113344, endereco: 'rua belezura 20, Sao Paulo - perto do josé'},
    {nome: 'maria', id: 114444, endereco: 'rua chuchu 1, RJ'},
    {nome: 'ana', id: 114555, endereco: 'Av belezura 41,  SP'},
]
 */
 
var alunos = [
    {nome: 'daniel', id: 112233, endereco: new Endereco({ logradouro: 'rua faz de conta', n: 2, complemento: 'ap 3', cidade: 'são paulo', estado: 'SP', cep: '11111-10'})},
    {nome: 'josé', id: 112244, endereco: new Endereco({ logradouro: 'rua belezura', n: 5, cidade: 'Sao paulo', cep: '545454-10' })},
    {nome: 'joão', id: 113344, endereco: new Endereco({  logradouro: 'rua belezura', n: 20, cidade: 'Sao Paulo', cep: '124521-15'})},
    {nome: 'maria', id: 114444, endereco: new Endereco({ logradouro: 'rua chuchu', n:1, estado: 'RJ', cep: '54782-15' })},
    {nome: 'ana', id: 114555, endereco: new Endereco({ logradouro: 'Av belezura', n: 41, cidade: 'SP', cep: '54478-55' })},
]
 
function Endereco(dados){
    this.logradouro = dados.logradouro || ''
    this.n = dados.n || 0
    this.complemento = dados.complemento
    this.estado = dados.estado
    this.cidade = dados.cidade 
    this.cep = dados.cep
}

var enderecos = []

for( var i = 0; i < alunos.length; i++){
    enderecos[i] =  alunos[i].endereco
}


for(var i = 0; i < enderecos.length; i++){
 var endereco = enderecos[i]
    for(propriedades in endereco){
        console.log(`${propriedades}: ${endereco[propriedades]}`)
    }
}