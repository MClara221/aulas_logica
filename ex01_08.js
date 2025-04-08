const prompt = require ('prompt-sync')()

//operacoes
let altura = Number(prompt('Digite a altura'))
let largura = Number(prompt('Digite a largura'))
let area = largura * altura 
let tintanecessaria = area / 2
console.log(`Area ${area}`)
console.log(`Tinta necessaria ${tintanecessaria.toFixed(2)} litros de tinta`)