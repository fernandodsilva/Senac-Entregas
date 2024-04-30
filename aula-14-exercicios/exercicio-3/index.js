// criar variavel que simule carrinho de mercado

const carrinho = []

// criar objetos com nome de frutas e sua disponibilidade 

const maça = {
    nome: "Maçã",
    disponibilidade: true
}
const banana = {...maça, nome: "Banana"}
const kiwi = {...banana, nome: "Kiwi"}

// criar função para por as "frutas" no "carrinho" e mudar a disponibilidade da "sacola

const funcaoColocarNoCarrinho = function(objeto){
    carrinho.push(objeto)
    } 
const mudarDisponibilidade = function(objeto){
    objeto.disponibilidade = !objeto.disponibilidade
}

// imprimir no console

funcaoColocarNoCarrinho(maça)
funcaoColocarNoCarrinho(banana) 
funcaoColocarNoCarrinho(kiwi) 

console.log(carrinho)