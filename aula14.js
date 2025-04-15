let frutas = ['Maçã', 'banana', 'Uva', 'Abacaxi']
//A variável contador serve para iterar os valores ate o limite da lista
for(let x = 0; x < frutas.lenght; x++){
    //O lenght identifica o tamanho total da lista 
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = ['Bill Gates','Rafinha', 'Raul Seixas','Esteves', 'Vieira']
for(let nome of listaNomes){
    console.log(nome)
}
const prompt = require('prompt-sync')()
let vogais=['a','e', 'i','o','u']
let consoantes = ['b','c','d','f','g','h','i','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  
let letra = prompt('Digite uma letra:')

if(vogais.includes(letra.toLowerCase())){
  console.log('É uma vogal')
 
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('É consoante ')}
else{console.log('Não é uma letra')}

//Obtendo a posição do item 
for(let[pos,fruta] of frutas.entries()){
    console.log(`Posição${pos} e fruta ${fruta}`)
}
let produtos = 'Celular, Notebook, TV, Tablet, Headset'
let listaProdutos = produtos.split(',')
for(let produto of listaProdutos){
    console.log(produto)
}
let palavra = 'SENAI'
for(letra of palavra){
console.log(letra)
}

