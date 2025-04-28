//Variáveis globais e locais 

function nomeEscola(cidadeParametro){
escola = 'SESI'
console.log(escola)

//Declarando uma variável local 
var cidade = 'Andradina'

}
//Essa variável é uma variável global pois ela pode ser acessada em qualquer parte do código
var escola = 'Senai'
console.log(escola)
nomeEscola()
var cidade = 'Mirandópolis'
console.log(cidade)

var x = 10 //variável global 
console.log('Fora da função',x)

function minhaFuncao(){
    let x = 0; //variável local 
    x = x + 1;
    console.log('Dentro da função', x )

}

minhaFuncao()

console.log('Fora da função de novo', x)
///////////////////////////////////////////////
var x = 10 //variável global 
console.log('Fora da função',x)

function minhaFuncao(){
 //variável global
    x = x + 1;
    console.log('Dentro da função', x )

}

minhaFuncao()

console.log('Fora da função de novo', x)
