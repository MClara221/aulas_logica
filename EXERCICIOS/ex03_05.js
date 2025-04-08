const prompt = require('prompt-sync')()

let salario = Number (prompt('Digite o salário'))

if(salario <= 2000 ){
    //salario = salario * 0.12
     salario = + (salario * 0.12)
    console.log(`Salário reajustado em 12%, o valor total é: ${salario}`)
}
else if(salario > 2000 || salario <= 4000){
    //salario = salario * 0.12
     salario = + (salario * 0.12)
    console.log(`Salário reajustado em 10%, o valor total é: ${salario}`)
}
else{
    //salario = salario * 0.12
     salario = + (salario * 0.08)
    console.log(`Salário reajustado em 8%, o valor total é: ${salario}`)
}

