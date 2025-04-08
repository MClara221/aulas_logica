const prompt = require('prompt-sync')()

let ano = Number(prompt('Digite o ano atual'))
let anoNasc = Number(prompt('Digite o ano de nascimento'))
let sub = ano - anoNasc
switch(true){
    case sub < 10:
    console.log('Criança')
    break 
    case sub >= 11 && sub <=17:
    console.log('Adolescente')
    break
    case sub > 60:
    console.log('Idoso')
    break 
    case sub >= 18 && sub < 59: 
    console.log('Adulto')
    break 
    default:
    console.log('Idade inválida')
}
