var arr = new Array(2, 1, 3, 4, 42, 46, 44, 7)

var soma = 0 

for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        soma += arr[i]
        
    }
}
console.log(`a soma dos valores impares é de: ${soma}`)
