const turno = prompt("Qual seu turno de aula? (M, V, N)").toUpperCase()

switch(turno){
	case "M":
		console.log("Bom dia!")
		break;
	case "V": 
		console.log("Boa tarde!")
		break;
	case "N": 
		console.log("Boa noite!")
		break;		
}
