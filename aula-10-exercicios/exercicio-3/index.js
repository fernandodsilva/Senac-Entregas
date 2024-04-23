const listaDeTarefas = []
const tarefa1 = prompt("Qual sua tarefa número 1 do dia?")
const tarefa2 = prompt("Qual sua tarefa número 2 do dia?")
const tarefa3 = prompt("Qual sua tarefa número 3 do dia?")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let numeroParaRemover = Number(prompt("Agora, digite o número de uma tarefa que já realizaste."))
numeroParaRemover = numeroParaRemover - 1
listaDeTarefas.splice(numeroParaRemover, 1)
console.log(listaDeTarefas)