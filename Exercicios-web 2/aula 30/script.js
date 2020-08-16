function total (...precos){
    let total = 0
    precos.forEach( p => total += p)
    
    return total
}