const prompt = require ('prompt-sync')()

//operacoes 
let nr1 =Number(prompt('Digite um numero:'))
let_cm = nr1 * 100
let_mm = let_cm * 10
let_km = nr1 / 1000
console.log(`O resultado de ${nr1} em centimetros ${let_cm} em milimetros ${let_mm} e em quilometros ${let_km}`)