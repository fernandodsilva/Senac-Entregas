
// Definições básicas
let continuar = true
const dados = [ ]
let indice = 1

// Função para cadastro
function cadastrar() {
	let nomeAbrigo = prompt("Qual o nome do abrigo que você gostaria de cadastrar?")
    let enderecoAbrigo = prompt("Qual o endereço do abrigo?")
    let cidadeAbrigo = prompt("Qual a cidade?").toUpperCase()
    let telefoneAbrigo = prompt("Qual o telefone de contato do abrigo?")
    let capacidadeLotacao = prompt("Qual a capacidade de lotação?")
    
    const dadosAbrigo = {
        codigo: indice,
        nome: nomeAbrigo,
        endereco: enderecoAbrigo,
        telefone: telefoneAbrigo,
        capacidade: capacidadeLotacao,
        cidade: cidadeAbrigo
     }
    dados.push(dadosAbrigo)

	 console.log(`Abrigo: ${nomeAbrigo} cadastrado com sucesso!`)
	 console.log("----------------")
    indice ++
}


// Função para listar
function listar() {
	let i = 0
	for (let abrigos of dados){ 
	if (i <= dados.length - 1){
		console.log(`Listagem de abrigos:
	Código: ${dados[i].codigo}
	Nome: ${dados[i].nome}
	Endereço: ${dados[i].endereco}
	Telefone: ${dados[i].telefone}
	Capacidade: ${dados[i].capacidade}
	Cidade: ${dados[i].cidade}`)}
i++
	}
	}


// Função para buscar
function buscar() {
	const cidadeUsuario = prompt("Em qual cidade você está?").toUpperCase()
	for (let i = 0; i <= dados.length -1; i++){
		if (dados[i].cidade.includes(cidadeUsuario)){
			console.log(`Os abrigos na sua cidade são:
	Código: ${dados[i].codigo}
	Nome: ${dados[i].nome}
	Endereço: ${dados[i].endereco}
	Telefone: ${dados[i].telefone}
	Capacidade: ${dados[i].capacidade}
	Cidade: ${dados[i].cidade}`)
		}
		else { 
			console.log("Infelizmente não temos abrigos nessa cidade.")
		}
	}
}


// Função para sair
function sair() {
	continuar = false
	console.log("Você fechou o aplicativo. Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 0:
			sair()
			break
	}
}
