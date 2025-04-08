const prompt = require('prompt-sync')()
//operações
let nr1 = Number(prompt('Digite um numero:'))
let soma = nr1 + 1 
let subtracao = nr1 - 1 
console.log(`O sucessor de ${nr1} é igual a ${soma} e seu antecessor é igual a ${subtracao}`)