const prompt = require('prompt-sync')()
let porHora =(prompt('Digite o quanto você ganha por hora:'))
let horasTrabalhadas =(prompt('Digite quantas horas você trabalha por mês:'))
let total = porHora * horasTrabalhadas
console.log(`O seu salário mensal é igual a ${total}`)