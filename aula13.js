
//reconheço que é um vetor pelo uso dos colchetes

let listaVazia = []
console.log(listaVazia)
let numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros)

//declarando lista de strings

let nomes = ['Ana', 'João', 'Maria']
console.log(nomes)

//declaração de uma lista mista

let listaMista = [1, 'dois', true, 2.5]
console.log(listaMista)

let listaComLista = [
    ['Coca-cola', 'Cachorro-Quente']
    [5.0, 10.0]
]
console.log(listaComLista)

//Alterando os valores da lista

let frutas = ['Maçã', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas)

//A função push adiciona um novo elemento no vetor

frutas.push('Laranja')
console.log(frutas)

// O spread também adiciona um novo elemento no vetor

frutas = [...frutas, 'Banana']
console.log(frutas)

//A função splice adiciona um novo item em uma posição 
//especifica a partir de um valor no indice

frutas.splice(2, 0, 'Morango')
console.log(frutas)

//Excluindo item na lista
frutas.splice(3,1) //Excluindo item pelo indice
console.log(frutas)
frutas.shift()//excluindo primeiro item da lista
frutas.pop()//Excluir ultimo item da lista
console.log(frutas[3]) //Acesso a partir de uma posição especifica
console.log(frutas.slice(0,4))//posição 0 até 4
console.log(frutas.slice(1))//a partir da posição 1
console.log(frutas.slice(-1))//Mostra os itens do fim 
console.log(frutas.length)//total de itens na lista

//Ordenar itens da lista

console.log(frutas)
frutas.sort()//Ordenar a lista de forma crescente 
console.log(frutas)
frutas.reverse()//Ordenando de forma decrescente
console.log(frutas)