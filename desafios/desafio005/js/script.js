function somar() {
    let numero = document.getElementById('value')
    let n = Number(numero.innerText) // se nao colocar o innerText, o que é trazido pra cá é o <p> e isso nao é string para fazer conversao, mas sim o que está dentro dele, que é o 0 nesse caso

    n ++
    
    numero.innerText = n // o "0" que é esse numero.innerText vai receber o novo "n" que agora está incrementando 1 a cada vez que clica
}

function subtrair() {
    let numero = document.getElementById('value')
    let n = Number(numero.innerText)

    n--

    numero.innerText = n
}

function resetar() {
    let numero = document.getElementById('value')
    let n = Number(numero.innerText)

    numero.innerText = 0
}