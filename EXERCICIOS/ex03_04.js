const prompt = require ('prompt-sync')()

let nota1 = Number (prompt('Digite a primeira nota'))
let nota2 = Number (prompt('Digite a segunda nota'))
let soma = nota1 + nota2
let media = soma / 2
if(media > 7){console.log('Aprovado!')}
else if(media == 5 || media == 6 || media == 7){console.log('Recuperação!')}
else if(media < 5){console.log('Reprovado!')}