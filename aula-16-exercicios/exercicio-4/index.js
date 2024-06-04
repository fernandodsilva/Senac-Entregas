//pedir o genero e o preço do filme que vao assistir no cinema
const genero = prompt("Qual o gênero do filme?").toLowerCase()
const preco = Number(prompt("Qual o preço do ingresso?"))

//verificar se meu amigo vai querer assistir o filme
//condiçoes= fantasia e preço menor que 15

if ((genero==="fantasia") && (preco < 15)){
	console.log("Bom filme!")
}
else{
	console.log("Escolha outro filme!")
}