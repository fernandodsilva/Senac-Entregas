const pessoa1 = { 
    nome: "Adriana",
    apelidos: [ "Dri", "Adri", "Diana" ]
}

const imprimirPessoa = function(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimirPessoa(pessoa1)

const pessoa2 = {...pessoa1, apelidos: [ "Drica", "Minny", "Lótus" ]}

imprimirPessoa(pessoa2)