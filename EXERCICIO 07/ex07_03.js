const prompt = require('prompt-sync')()
let comidas = []
for(let i = 0; i < 6; i++){
let comida =prompt(`Digite o nome da comida ${i + 1}`)
comidas.push(comida)
console.log(comidas)
console.log(comidas[0])
}