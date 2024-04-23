const comidas = [ "Estrogonoff", "Comida Japonesa", "Bife Acebolado", "Pizza", "Morango" ]
console.log(comidas)
console.log("Essas são minhas comidas preferidas:")
console.log("1:", comidas[0])
console.log("2:", comidas[1])
console.log("3:", comidas[2])
console.log("4:", comidas[3])
console.log("5:", comidas[4])

const comidaUsuario = prompt("Qual sua comida preferida?")
comidas[1] = comidaUsuario
console.log(comidas)