const prompt = require ('prompt-sync') ()

let mes = prompt('Digite o nome do mês')
if(mes == 'janeiro'|| mes == 'março' || mes == 'maio'|| mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro'){
    console.log('O mês tem 31 dias')
}
else if(mes == 'fevereiro'){
    console.log('O mês tem 28 dias')

    }
else if(mes == 'abril' || mes== 'junho' || mes== 'setembro' || mes == 'novembro'){
    console.log('O mês tem 30 dias')
}