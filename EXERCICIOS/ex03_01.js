const prompt = require ('prompt-sync')()

let numero = prompt('Digite um número de 1 a 7')
if(numero == 1) {console.log('Domingo')}
else if(numero == 2) {console.log('Segunda-feira')}
else if(numero == 3) {console.log('Terça-feira')}
else if(numero == 4) {console.log('Quarta-feira')}
else if(numero == 5) {console.log('Quinta-feira')}
else if(numero == 6) {console.log('Sexta-feira')}
else if(numero == 7) {console.log('Sábado')}
else {console.log ('Não é um dia da semana')}