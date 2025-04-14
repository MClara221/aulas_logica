const prompt = require('prompt-sync')()

//Estrutura condicional aninhada 
let idade = Number(prompt('Digite a sua idade:'))

if(idade >= 18 && idade <= 70){
console.log('Voto obrigatório')
}else{
    if(idade < 16){
console.log("Você não pode votar")
    }else{
       if(idade >= 16 || idade > 70){
        console.log('Voto facultativo')
       }
    }
}   

//Switch Case Estrutura de controle de fluxo para tomar decisões com base no valor de uma variavel 
let n1 = Number(prompt('Digite o primeiro número'))
let n2 = Number(prompt('Digite o segundo número'))
let op = prompt('Escolha a operação (+, -, *, /, **')

// Testa o valor da variável se é true 
switch(op){
    //Caso a variável op for verdadeiro, testara cada condição 
    //Caso uma condição seja igual à um dos "cases" executará o bloco em questao, usamos o break para interromper o processo
    case '+':
    console.log(`Resultado: ${n1 + n2}`)
break
case '-' :
    console.log(`Resultado: ${n1 - n2}`)
break
case '/':
    console.log(`Resultado: ${n1 / n2}`)
break 
case '**':
console.log(`Resultado ${nr1 ** nr}`)
break 
default: 
console.log('Operação inválida')
}

//Verificar qual letra é igual 
let letra = prompt('Digite uma letra').toLowerCase() 

switch(letra){
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    console.log('Vogal')
    break
    default: 
    console.log('Consoante')
}

//Converter a nota em numero para a letra 
let nota = parseInt(prompt('Digite a nota do aluno:'))
//O switch (true) verifica quais expressões dentro do case retornam true(verdade) ou seja comparamos as expressões booleanas 
//Quando usamos switch(variavel), o switch compara exatamente o valor da variavel com os cases definidos
switch(true){
    case nota >= 90 :
    console.log('Nota A')
    break 
    case nota >= 80:
    console.log('Nota B')
    break
case nota >= 70 :
    console.log('Nota C')
    break
    case nota >= 60:
    console.log('Nota D')
    break 
    default:
    console.log('Nota E')

}
