function tabuada() {
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (numero.value.length == 0) { // quando coloca == 0, o valor 0 entra, o que não entra é o espaço vazio
        alert('Por favor, insira um número!')
    } else {
        let n = Number(numero.value)

        tab.innerHTML = '' // limpa a tabuada anterior

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` // mais usado para outras linguagens como php, para js não faz tanto sentido
            tab.appendChild(item) 
        }

        /* let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }    */
    }
}