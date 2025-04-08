const prompt = require('prompt-sync')()

let velocidade = Number(prompt('Digite a velocidade'))

if(velocidade > 80){
console.log('Voce foi multado')
let multa = velocidade - 80
console.log(`O valor da Multa é ${multa}`)
}
