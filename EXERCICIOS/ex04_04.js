const prompt = require('prompt-sync')()

let mes = prompt('Digite o nome de um mês').toLocaleLowerCase()
switch(mes){
case 'janeiro':
case 'março':
case 'maio':
case 'julho':
case 'agosto':
case 'outubro':
case 'dezembro':
console.log(`O ${mes} tem 31 dias`)
break
case 'abril':
case 'junho':
case 'setembro': 
case 'novembro':
console.log(`O ${mes} tem 30 dias`)
break 
case 'fevereiro':
console.log(`O ${mes} tem 28 dias`)
break 
default:
console.log('Mês inválido')
}