function contar() {

    let inicio = document.getElementById('txti')
    let passos = document.getElementById('txtp')
    let fim = document.getElementById('txtf')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) { // caso o usuário nao preencha alguma das lacunas -- tem que colocar .value.length depois da variavel
        alert('[ERRO] Faltam dados!') 
    } else { // se ele preencher:
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value) // Transformando string em number
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            alert('Passo inválido! Vamos considerar o passo 1')
            p = 1 // se o passo for menor que 0, ele será alterado automaticamente pra 1
        }
        if (i < f) { // caso o inicio seja maior que o fim
            // Contagem crescente
            for(let c = i; c <= f; c += p) { // a variavel c de contagem inicia-se no i (inicio), tem que ser menor ou igual ao fim, e ela soma sempre ela mesma + os passos
                res.innerHTML += `${c} \u{1F449}`
            }
        } else { // caso o fim seja maior que o inicio
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) { // a variavel c inicia-se no inicio, tem que ser MAIOR ou igual ao fim, e ela diminui o valor dela mesma e dos passos
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F4CD}`
    }
}