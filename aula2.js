//Importando a biblioteca para a entrada de dados 
const prompt = require('prompt-sync') ()

// Variaveis e constantes

// passo 1: Receber o nome da pessoa 
let nome='Ayrton' 
// passo 2: Receber a idade da pessoa 
let idade= 36
// passo 3: Receber o peso da pessoa 
let peso= 76.5 
// passo 4: Exibir o nome, a idade e o peso 
console.log(nome,idade,peso)

//Receber e armazena o texto em uma variavel
let curso = "Desenvolvimento de sistemas"
// #tipo  nome  recebe  valor   na variavel 
 
//Exibir o valor armazenado 
console.log("curso") //Imprimo uma string (texto)
console.log (curso)//imprimi o valor que esta dentro da variavel 
console.log ("curso" , curso)
//criando e atribuindo valor a outras variaveis 
let idade2 = 35 // valor do tipo int
let temperatura = 23.5 //valor dp tipo float
let nome2 = "Lyuz"

console.log("Olá", nome2, "você tem:", idade2, "e hoje esta fazendo", temperatura,"°C" )

//Usando template string 
console.log(`Olá ${nome},você tem ${idade2} e hoje está fazendo: ${temperatura}°C`)


let chovendo = false 
let dia = true
// as constantes não podem ser reatribuidas novos valores 
let PI = 3.1415
console.log(PI)

// Utilizando prompt para receber dados 
// Entrada de dados 

//no prompt sempre recebemos uma string
nome = prompt ('Qual é o seu nome?')
//usando o parseInt ou parseFloat converte os valores recebidos
// que vem como string para int ou float 
idade = parseInt (prompt ("Qual é a sua idade?"))
peso = parseFloat(prompt('Qual seu peso?'))
console.log (`Seu nome é ${nome}, você tem ${idade}, você pesa ${peso}`) 
// Valida o tipo de variavel
console.log(typeof(peso))
console.log(idade + peso)
// Apos a conversão dos valores é possível realizar 
//Calculos matemáticos
console.log(idade+peso)
// Exe