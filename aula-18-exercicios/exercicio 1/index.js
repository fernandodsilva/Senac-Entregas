let numeroDePets = Number(prompt("Quantos pet's você tem?"))
const nomesPets = [ ]

if (numeroDePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
}

else if (numeroDePets > 0){
    for (let n = 0; n < numeroDePets; n++) {
       let pets = prompt("Qual o nome do pet?")
        nomesPets.push(pets)
    }
    }

    console.log(nomesPets)