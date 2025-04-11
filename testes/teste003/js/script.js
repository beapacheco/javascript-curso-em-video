function verificar() {
    let num = document.getElementById('txtn')
    let valor = num.value

    if (valor == '') {
        alert('Você deve digitar um número')
    } else {
        let n = Number(num.value) // a conversão deve ser feita depois da verificação

        if (n % 2 == 0) {
        parximpar.innerHTML = 'O resultado é par'
    } else {
        parximpar.innerHTML = 'O resultado é ímpar'
    }
}
}