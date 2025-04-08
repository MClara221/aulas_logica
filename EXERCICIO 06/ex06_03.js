   const prompt = require('prompt-sync')()
   let somaPar = 0
   let somaImpar = 0
   let qtdPar = 0
   let qtdImpar = 0
   let numero = 0 

   for(let i = 0; i <= 5; i++){
        numero = Number(prompt('Digite um número:'))
        if(numero % 2 == 0){
            somaPar += numero
            qtdPar++
        }
        else{
            somaImpar += numero
            qtdImpar++
        }
     }
console.log(`A soma de ${qtdPar} é ${somaPar}`)
console.log(`A soma de ${qtdImpar} é ${somaImpar}`)