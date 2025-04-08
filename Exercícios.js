const prompt = require('prompt-sync')()
console.log("bem-vindo ao curso de JavaScript")
console.log("Estou aprendendo a usar o console.log")
console.log (15+25)
console.log (100-45)
console.log (12*7)
console.log (144/12)
console.log (20%3)
console.log(2**5)
// Exercicios de variaveis 
let nomeAluno ="Maria Clara"
let altura ="1,62"
let escola ="SESI"
let ano = "2020"
console.log(` A aluna ${nomeAluno} que mede ${altura} que estuda na escola ${escola} ingressou no ano de ${ano}`)


let nomeProfessor = "Ed Carlos"
let materia = "Matemática"
let anoIngresso = 2020
console.log(`O professor ${nomeProfessor} que leciona a materia ${materia} no ${ano}. E ingressou na ${escola} no ano de ${anoIngresso}`)

// Retribuindo valores as nossas variaveis 
nomeAluno = prompt('Digite o nome do aluno? ')
altura = parseFloat(prompt('Digite a altura? '))
escola = prompt('Digite o nome da escola? ')
ano = parseInt(prompt('Digite o ano da turma? '))
console.log(`A aluna ${nomeAluno} tem ${altura} estuda na escola ${escola} no ano de ${ano}`)

nomeProfessor = prompt('Digite o nome do professor:')
materia = prompt ('Digite o nome da matéria: ')
anoIngresso = parseInt(prompt('Digite o ano de ingresso:'))