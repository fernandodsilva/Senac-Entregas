//pedir para que o aluno digite seu turno (M= matutino, 	V=vespertino,	 N=noturno)
const turno = prompt("Qual seu turno de aula? (M, V, N)").toUpperCase()

//verificar o turno em que um aluno estuda
//imprimir no console bom dia, boa tarde ou boa onite dependendo da resposta
if (turno==="M"){
	console.log("Bom dia!")
}

else if (turno==="V"){
	console.log("Boa tarde!")
}

else if(turno==="N"){
	console.log("Boa noite!")
}