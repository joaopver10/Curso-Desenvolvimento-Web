var ano = 2020
for(let i = 1000; i < ano ; i++){
    if ((i % 4 == 0 || i % 400 == 0) && (i % 100 !== 0)){
        console.log(i)
    }
}