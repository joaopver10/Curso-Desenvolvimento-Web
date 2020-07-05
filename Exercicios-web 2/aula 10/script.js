var produtos = [{'nome': 'caneta', 'preço': 2.2}, {'nome': 'lapis', 'preço': 1.50}, {'nome': 'caneta', 'preço': 0.50}]

for(var i = 0; i < produtos.length; i++){
    console.log(`os produtos disponiveis são ${produtos[i].nome} com o preço de ${produtos[i].preço}`)
}