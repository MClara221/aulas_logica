const prompt = require('prompt-sync')()
let valor=Number(prompt('Digite um valor positivo ou negativo:'))
if(valor == '- valor'){
console.log(`O número ${valor} é negativo`)
}
else{
console.log(`O número ${valor} é positivo`)
} 


