let contador = 1
//irá repetir enquanto a condição for verdadeira
//Ou seja sera verdade enquanto o contrador for menor ou igual a 5
while(contador <= 5){
    console.log(`O contador é ${contador}`)
//Incrementando a variavel ou seja adicionando valor a ela 
//Para que continue o processo até que a condição seja atingida
contador = contador + 1
}

console.log('Fim')
const prompt = require('prompt-sync')()
let senha_senai = '12345'

while(true){
    let senha = prompt('Digite a senha:')
    if(senha_senai == senha){
        console.log('Você hackeou a senha')
     break
    }else if(senha == 'Desisto')
     break
}

//Laços de repetição
let soma = 0
let qtd = 0

while(true){
let valor = Number(prompt('Digite o valor do produto ( 0 para encerrar):'))
if(valor == 9){
    break 
}
  else{
    soma = soma + valor
   qtd++
 }   
}

console.log(`Foram informados ${qtd}`)
//toFixed para colocar somente dois digitos apos a virgula 
console.log(`O valor total dos produtos ${soma.toFixed(2)}`)


let soma2 = 0
let qtd2 = 0
let encerrar = ""
while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt('Digite o valor do produto'))
soma2 = soma + valor 
qtd2++
encerrar = prompt('Deseja continuar: (digite SUB-TOTAL')
}


 
console.log(`Foram informados ${qtd}`)
//toFixed para colocar somente dois digitos apos a virgula 
console.log(`O valor total dos produtos ${soma.toFixed(2)}`)


//Crie um jogo de adivinhaçãode números 
//O computador precisa sortear um número aleatório com o Random 

console.log('######################################')
console.log( 'JOGO DA ADIVINHAÇÃO')
console.log('#######################################')

let nrSorteado = Math.floor(Math.random() * 100 + 1) //gera um número aleatório 
let acertou = false 

while(!acertou){
const chute = parseInt(prompt('Digite um número entre 1 e 100 para adivinhar'))

if(chute > nrSorteado){
    console.log(`Você chutou ${chute}, tente um número menor`)
}
else if(chute < nrSorteado){
    console.log(`Você chutou ${chute}, tente um número maior`)
}
else if(chute == nrSorteado){
    console.log(`Você chutou ${chute}, Parabéns você acertou`)
    acertou = true 
}
}

console.log('FIM')
