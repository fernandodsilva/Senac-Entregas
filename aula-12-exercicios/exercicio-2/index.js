function somar (numero1, numero2){
    return Number(numero1) + Number(numero2)
}

function maiorOuIgual (numero1, numero2){
    return Number(numero1) >= Number(numero2)
}

function verificarNumeroPar (numero){
    return numero % 2 === 0
}

function tamanhoEMaiuscula (mensagem){ 
    const tamanho = mensagem.length
    const maiuscula = mensagem.toUpperCase()
     console.log(maiuscula, tamanho)
}

console.log(somar(5, 9))
console.log(maiorOuIgual(9, 5))
console.log(verificarNumeroPar(12)) 
tamanhoEMaiuscula("Meu nome é Fernando.")