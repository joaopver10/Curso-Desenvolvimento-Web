var array = [2, 3, 6, 18]
var multi = dobrar(array)

function dobrar(arr){
    var temp = []
    for(var i = 0; i < arr.length; i++){
        temp[i] = arr[i] * 2
    }
    return temp
}
console.log(array)
console.log(multi)