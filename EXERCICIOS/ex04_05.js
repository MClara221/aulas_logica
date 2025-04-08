const prompt = require('prompt-sync')()

let n1 = Number(prompt('Digite a primeira nota'))
let n2 = Number(prompt('Digite a segunda nota'))
let media = (n1 + n2) /2
switch(true){
case media < 5:
console.log('Reprovado')
break
case media ==5 &&  media <=7:
console.log('Recuperação')
break 
default: 
console.log('Aprovado')
}