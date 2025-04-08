const prompt = require('prompt-sync')()

let salario = Number(prompt('Digite o seu salário'))
switch(true){
case salario <= 2000:
salario = salario + (salario * 0.12)
console.log(`O salário reajustado em 12% é igual a ${salario}`)
break
case salario > 2000 || salario <= 4000:
salario = salario +(salario * 0.10)
console.log(`O salário reajustado é igual a ${salario}`)
break 
default:
 salario = salario + (salario * 0.08) 
console.log(`O salário reajustado é igual a ${salario}`)
}