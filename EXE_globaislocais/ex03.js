let listaNomes = []

function adicionarNome(nome){
    listaNomes.push(nome)
}
function removerNome(){
    listaNomes.pop()
}
function removerPorNome(nome){
    let posicao = listaNomes.indexOf(nome)
//Quando o indexof não encontra o elemento, ele retorna -1
    if(posicao != -1){
        listaNomes.splice(posicao, 1)
    }
}
adicionarNome('Ana')
adicionarNome('Camila')
adicionarNome('Matheus')
console.log(listaNomes)
adicionarNome('Garro')
console.log(listaNomes)
removerNome()
console.log(listaNomes)
removerPorNome('Camila')
console.log(listaNomes)