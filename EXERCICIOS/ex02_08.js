const prompt = require('prompt-sync')()

let vendas = Number(prompt('Digite o total de vendas no mes'))

if(vendas > 5000){
    let comissao = vendas * 0.05
    console.log(`A comissão para o mês é de ${comissao}`)
}else{
    let comissao = vendas * 0.05
    console.log(`A comissão para o mes é de ${comissao}`)
}