function meusDados (){
    console.log(`Eu sou Fernando, tenho 19 anos, moro em São Leopoldo e sou estudante`)
}

function dadosUsuario (nome, idade, cidade, profissão){ 
    const sobreUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`
    return sobreUsuario
}

meusDados()

console.log(dadosUsuario("Gabriel", 25, "Novo Hamburgo", "Balconista"))