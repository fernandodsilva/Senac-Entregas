const idadeNascimento = Number(prompt("Em que ano você nasceu?"))
const anoAtual = Number(prompt("Em que anos estamos?"))
let idadeDias = Number(anoAtual-idadeNascimento)*365

console.log("Sua idade em meses:", (anoAtual-idadeNascimento)*12)
console.log("Sua idade em dias:",(anoAtual-idadeNascimento)*365)
console.log("Sua idade em horas:", idadeDias * 24) 
