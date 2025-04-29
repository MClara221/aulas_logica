const prompt = require('prompt-sync')()
let ganhaPorHora = Number(prompt('Digite o quanto você recebe por hora:'))
let horasTrabalhadas =Number(prompt('Digite a quantidade de horas trabalhadas:'))
let salario = ganhaPorHora * horasTrabalhadas 
let irpf = salario * 11 / 100 
let inss = salario * 8 / 100
let sindicato = salario * 5 / 100 
let salarioBruto = salario 
let salarioLiquido = salarioBruto - irpf - inss - sindicato 
console.log(`O salário bruto é igual a: ${salarioBruto}`)
console.log(`Pagou ${irpf} para o imposto de renda`)
console.log(`Pagou ${inss} para o INSS`)
console.log(`Pagou ${sindicato} para o sindicato`)
console.log(`O salário líquido é igual a ${salarioLiquido}`)