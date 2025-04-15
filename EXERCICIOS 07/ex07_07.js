let carros = 'Gol;corsa;Palio;Monza;Fusca;'
let listaCarros = carros.split(';')

listaCarros.pop()
for(let[posicao, carro] of listaCarros.entries()){
    console.log(`Posição ${posicao}: ${carro}`)
}
