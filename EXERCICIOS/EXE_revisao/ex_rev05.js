const prompt = require('prompt-sync')()
while(true){
let letra =(prompt('Digite F para feminino ou M para masculino:'))
if(letra == 'F'){
    console.log('feminino')
}else if(letra == 'M'){
console.log('masculino')
}
else{
    console.log('Inválido')
}
}