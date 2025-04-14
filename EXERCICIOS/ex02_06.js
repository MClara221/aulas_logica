const prompt = require('rompt-sync')()

let numero1= Number(prompt('Digite um numero'))
let numero2= Number(prompt('Digite um numero'))

if(numero1 == numero2){
    console.log('Os numeros são iguais')
}
else{
console.log('Os numeros são diferentes')