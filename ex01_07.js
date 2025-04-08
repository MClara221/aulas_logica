const prompt  = require ("prompt-sync")()

//operacoes 
let reais= parseFloat(prompt('Digite o valor em reais'))
let cotacao= parseFloat(prompt('Digite a cotacao do dolar'))
let dolares= reais / cotacao
console.log(`Tenho R$${reais} na minha carteira que equivale a $${dolares}`)