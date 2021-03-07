
// Fibonacci sem recursividade

function fibo(n) {
  let a = 0;
  let b = 1;
  let temp;

  while (n--) {
    temp = b;
    b += a;
    a = temp;
    console.log(a)
    
  }
  return a;


}

fibo(8)


//Fibonacci recursivo

function fibo2(n) {

    if( n <= 2) return 1

    return fibo2(n - 1) + fibo(n - 2)
    
}
console.log("--------------")
console.log(fibo2(8))


//Fibonacci recursivo com memoização
function fibo3(n, cache) {

    cache = cache || {}


    if(cache[n]) return cache[n]

    return cache = fibo2(n - 1, cache) + fibo(n - 2, cache)
    
}

console.log("--------------")
console.log(fibo3(8))
