const prompt = require('prompt-sync')()

let contador = 1
while(contador <= 20){
if(contador % 2 == 0)
console.log(`O contador é igual a ${contador}`)
contador = (contador + 1) 
}
console.log('FIM')