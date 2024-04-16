let nome 
let idade

console.log(typeof nome, typeof idade) //aparece undefined, pois não foi atribuido um valor a variável//

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome, typeof idade) //"string". Notei que mudou pois eu atribui um valor para as variáveis//

console.log("Olá", nome, "você tem", idade,"anos.")