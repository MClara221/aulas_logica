const prompt = require('prompt-sync')()

let altura = Number(prompt('Digite sua altura'))
let peso = Number(prompt('Digite seu peso'))
let imc = peso / (altura ** 2)
if(imc < 18.5) {
    console.log('Abaixo do peso ideal')
}else if(imc >= 18.5 && imc < 25){
console.log('peso ideal')
}else if(imc>=25 && imc<30){
    console.log('Sobrepeso')
}else{
    console.log('Obesidade')
}

let lado1 = Number(prompt('Digite o valor do lado 1'))
let lado2 = Number(prompt('Digite o valor do lado 2'))
let lado3 = Number(prompt('Digite o valor do lado 3'))

let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3 ) && (lado1 != lado3)

console.log('Triangulo equilatero?', eq, 'Triangulo escaleno' ,es)

//praticando

let ld1 = prompt('Digite o lado 1')
let ld2 = prompt('Digite o lado 2')
let ld3 = prompt('Digite o lado 3')
if(ld1 == ld2 && ld2 == ld3){
    console.log('Triangulo equilatero')
}else if(ld1 != ld2 && ld2 != ld3 && ld1 != ld3){
    console.log('Triangulo escaleno')
}else{
    console.log('Triangulo equilatero')
}

//Descobrir a quantidade de horas trabalhadas
let horas = Number(prompt('Total de horas trabalhadas'))
let vendas =  Number(prompt('Total de vendas'))

//validar se uma das condições foi atendida ( mais de 5000 em vendas ou mais de 40 horas trabalhadas)
if(vendas > 5000 || horas > 40){
    console.log('Tem direito ao bonus')
}
else{
    console.log('Não tem direito ao bonus')
}

//EXERCICIOS 

let ltr = (prompt('Digite a letra'))
if(ltr == 'A' || ltr == 'E' || ltr =='I' || ltr == 'O' || ltr =='U') {
    console.log(`A letra ${ltr} é uma vogal`)

}
else{
    console.log(`A letra ${ltr} é uma consoante`)
}