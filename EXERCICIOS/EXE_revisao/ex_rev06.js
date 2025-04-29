const prompt = require('prompt-sync')()
let altura =(prompt('Digite a sua altura:'))
let sexo =(prompt('Digite F para feminino e M para masculino:'))
if(sexo == 'F'){
let pesoIdealFem = (62.1 * altura)-44.7
console.log(`Seu peso ideal é: ${pesoIdealFem}`)
}else if(sexo == 'M'){
let pesoIdeal = (72.2 * altura)-58
console.log(`Seu peso ideal é: ${pesoIdeal}`)
}
else{
    console.log('Inválido')
}