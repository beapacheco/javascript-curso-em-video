function verificar() {
    let primeiro = document.getElementById('txtn1')
    let segundo = document.getElementById('txtn2')

    first = Number(primeiro.value)
    second = Number(segundo.value)
    
    if (first == '' || second == '') {
        alert('Você deve preencher os campos')
    } else if (first > second) {
        maioroumenor.innerHTML = `O número ${first} é maior que ${second}`
    } else {
        maioroumenor.innerHTML = `O número ${second} é maior que ${first}`
    } if (first == second) {
        maioroumenor.innerHTML = 'Os dois números são iguais'
    }
}