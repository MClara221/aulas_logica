const prompt = require('prompt-sync')()

//operação com variaveis 
let nr1 = Number(prompt("Digite um numero?"))
let nr2 = Number(prompt("Digite um numero?"))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)
let subtracao = nr1 - nr2 
console.log(`A subtracao entre ${nr1} - ${nr2} é igual: ${subtracao}`)
let multiplicacao = nr1 * nr2 
console.log(`A multiplicacao entre ${nr1} * ${nr2} é igual: ${multiplicacao}`)
let divisao = nr1 / nr2 
console.log (`A divisao entre ${nr1} / ${nr2} é igual: ${divisao}`)
let exponenciacao = nr1 ** nr2 
console.log(`A exponenciacao entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

// Calculando valor do celular com desconto
let valor = Number(prompt('Digite o preco do celular:'))
let desconto = Number(prompt('Digite o preco do desconto:'))

valor = valor - desconto
console.log('O valor do celular com desconto é ${valor}')

//Calculando o dobro e a metade 
//passo 1
let numero = Number(prompt('Digite um numero'))
//passo 2
let dobro = numero * 2
//passo 3
let metade = numero / 2 
//passo 4
console.log('O dobro de %{numero} é %{dobro} e a metade é ${metade}')

//Calculando o preco
//passo 1
let horas_por_dia = 8
let dias_totais = 15
let horas_trabalho = horas_por_dia * dias_totais 
let custo_hora = 100 
custo_total = horas_trabalho * custo_hora 

//Exibir o resultado
console.log(custo_total)
