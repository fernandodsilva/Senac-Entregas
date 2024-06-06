const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

function imprimirArray (array){
    for (let item of array) {
        console.log(item)
    }
}

function dividirArray (array){
    for (let item of array) {
        console.log(item/10)
    }
}

function arrayPar (array){
    const numerosPares = [ ]
    for (let item of array)
        if (item % 2 === 0 ){
            numerosPares.push(item)}
            console.log(numerosPares)
}

function arrayIndice (array) {
    const indice = [ ]
    const tamanho = array.length

    for (let i = 0; i < tamanho; i++){
        indice.push(`O elemento do índice ${i} é: ${array[i]}`)
    }
    return indice
}

function arrayMenorMaior (array) {
    let maior = array[0]
    let menor = array[0] 
    const tamanho = array.length
    for (let i = 1; i < tamanho; )

}