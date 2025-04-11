function verificar() {
    let primeiro = document.getElementById('txtn1')
    let segundo = document.getElementById('txtn2')

    first = Number(primeiro.value)
    second = Number(segundo.value)
    
    if (first == '' || second == '') {
        alert('Você deve preencher os campos')
    } else if (first > second) {
        maioroumenor.innerHTML = `O primeiro número é maior que o segundo número`
    } else {
        maioroumenor.innerHTML = `O segundo numero é maior que o primeiro número`
    } if (first == second) {
        maioroumenor.innerHTML = 'Os dois números são iguais'
    }
}