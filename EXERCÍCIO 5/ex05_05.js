const prompt = require('prompt-sync')()

let numero = parseInt(prompt('Digite um número'))

let fatorial = 1
let i = numero
let sequencia = numero + '! =' 

while(i >= 1){
 fatorial = fatorial * i
 sequencia = sequencia + i 
 if(i > 1){
    sequencia = sequencia + '*'
 }
 i-- //decrementando o contador 

}

sequencia = sequencia + '=' + fatorial
console.log(sequencia)
