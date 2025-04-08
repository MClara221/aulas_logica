const prompt = require('prompt-sync')()
//operacoes 
let nr1 = Number(prompt('Digite um numero:'))
let nr2 = Number(prompt('Digite um numero:'))
let soma_notas  = nr1 + nr2
let media =  soma_notas / 2
console.log(`A media é igual a ${media}`)