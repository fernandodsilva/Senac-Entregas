const somar = function (a, b){ 
    return a + b
}

const subtrair = function (a, b){
    return a - b
}

const multiplicar = function (a, b){ 
    return a * b
}

const dividir = function (a, b){
    return a / b
}

const valor1 = Number(prompt("Digite um número."))
const valor2 = Number(prompt("Digita outro número."))

console.log(`Números inseridos: ${valor1} e ${valor2}
Soma: ${somar(valor1, valor2)}
Diferença: ${subtrair(valor1, valor2)}
Multiplicação: ${multiplicar(valor1, valor2)}
Divisão: ${dividir(valor1, valor2)}`)