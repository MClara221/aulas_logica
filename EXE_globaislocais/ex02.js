let dolar = 5.67 
let euro = 6.43

function converterMoeda(valorReais){
let valorDolar = valorReais / dolar
let valorEuro = valorReais / euro
console.log(`R$ ${valorReais.toFixed(2)} equivale a:`)
console.log(`R$ ${valorDolar.toFixed(2)}`)
console.log(`R$ ${valorEuro.toFixed(2)}`)
}
converterMoeda(100)
converterMoeda(80)
converterMoeda(60)