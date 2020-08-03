/*
JSON javascript object notation
 */

 const valor ={
     nome: "programação javascript",
     horas: 27,
     preco () {
         return this.horas * 0.67
     }
 }

 // convertendo para json
 const json = JSON.stringify(valor)


 // convertendo para javascript
 const obj = JSON.parse(json)