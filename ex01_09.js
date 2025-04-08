const prompt = require ('prompt-sync')()
let preco = Number(prompt('Digite o preco do produto'))
let desconto = preco * 0.05
console.log(`Preco sem desconto ${preco.toFixed(2)}`)
console.log(`Preco com desconto ${precoComDesconto.toFixed(2)}`)
