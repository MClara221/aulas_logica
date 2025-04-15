const prompt = require ('prompt-sync')()

function Cabecalho(texto){
    console.log('--------------------------')
    console.log(texto)
    console.log('--------------------------')
}
//criando outra função
//função de saudação
function Saudacao(){
    let nome = prompt('Digite seu nome:')
    console.log(`${nome} tenha um bom dia`)
}
    //chamando a função 
    Cabecalho('SESI/SENAI')
    let escola ='Sesi-025'
    Cabecalho(escola)
    Saudacao()
//Criei a função soma que irá receber dois valores como parametro
//a partir desses valores, realizara o calculo e mostrara o resultado 
    function Soma(n1, n2){
        let resultado = n1 + n2 
        console.log(resultado)
    }
    Soma(5,6)
    Soma(8,9)
    Soma(8,18)

    //EXERCICIOS 
    function ParImpar(num){
    if(num % 2 == 0){
     console.log(`${num} é par`)
    }else{
        console.log(`${num} é impar`)
    }

}
    ParImpar(8)
    ParImpar(7)

    function Media(n1, n2){
        let resultado = (n1 + n2) / 2
        return(resultado)
    }

    console.log(Media(6,8))
    //Armazenei o retorno da função em uma variável
    let valor = Media(9,7)
    //Utilizei o retorno da função para escrever na tela 
    console.log(valor)
    //Utilizei a variavel que recebeu o retorno da função para chamar a função par ou impar passando o valor como parametro 
    ParImpar(valor)
