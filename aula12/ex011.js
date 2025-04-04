var idade = 65
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não pode votar') //só usa isso no node js, senão é document.write
} else if (idade /*>= 16*/ < 18 || idade >=65) {
        console.log('Você possui voto opcional')
    } else {
        console.log('Você obrigatório')
    }