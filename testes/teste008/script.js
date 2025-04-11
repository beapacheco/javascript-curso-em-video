function verificar() {
    let n = Number(document.getElementById('txtn').value)

    if (n === 0) {
        alert('Digite um número para continuar')
    } else {
        let soma = 0
        let resultado = '' // pega o 1 2 3 4 5 etc até n

        for (let i = 1; i <= n; i++) {
            soma += i // mesma coisa que soma = soma + i
            resultado += i // adiciona i ao resultado, ou seja, se i for 5, por exemplo, o resultado será 12345
            if (i < n) {
                resultado += ' + '
            }
        }
        res.innerHTML = `${resultado} = ${soma}` // resultado é = 1 + 2 + 3 + etc até n e a soma é literalmente a soma desses números até n
    }
}


/* 

pegar o numero que a pessoa colocou
transformar p number

confirmar que a pessoa escrever algo
se nao alert

se sim, prossigamos

1++ até o n (1 + 2 + 3 + 4 + 5 + ... n = ...)






. Soma de números de 1 a N
•	Peça um número N para o usuário e some todos os números de 1 até N.
•	Ex: Se o usuário digitar 5, o resultado será 1 + 2 + 3 + 4 + 5 = 15.
 */