function verificar() {
    let n = Number(document.getElementById('txtn').value)

    if (n === 0) {
        alert('Você deve digitar um número!')
    } else {
        let resultado = 1 // o resultado começa em 1 porque todo fatorial de um número começa a ser calculado a partir de 1
        let exibicao = '' // armazena a string q mostrará a multiplicacao na tela, tipo 1 x 2 x 3 etc
        let c = 1 // começa em 1 porque o fatorial começa com 1

        while (c <= n) {
            resultado *= c // a cada iteração multiplica-se o valor de resultado pelo valor de c, ex: se o resultado = 1 e c =2, o resultado vira 2
            exibicao += c // adiciona-se o valor de c a exibição, ou seja, se c = 1 a string vai ficar 1, se c = 2, a string vai ficar 1 x 2, etc
        if (c < n) { // essa parte só adiciona o x abaixo se o c for menor que o n, pra que n finaliza a expressao com um x extra
            exibicao += ' x '
        }
        c++ // aumenta o valor de c de 1 em 1 até q c seja maior q n e o while pare
        }
    res.innerHTML = `${exibicao} = ${resultado}` // é colocado o valor de exibicao (a sequencia de multiplicacao) e o resultado (o valor final do fatorial) dentro da div res no html
    }
}