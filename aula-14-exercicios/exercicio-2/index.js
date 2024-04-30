//Criar dois objetos diferentes contendo: nome, idade e profissão
const pessoa1 = {
    nome: "Leonardo",
    idade: "19",
    profissao: "Mecânico"
}

const pessoa2 = { 
    nome: "João",
    idade: "45",
    profissao: "Caminhoneiro"
}

//Escrever uma função que receberá um objeto de cada vez e retornar um array
const retornarArray = function(objeto) { 
    
    let valores = [ objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length ]
    return valores
}

// Imprimir no console

console.log(retornarArray(pessoa1))
console.log(retornarArray(pessoa2))

