function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
minuto = minuto.toString().padStart(2, '0');
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
if (hora >= 5 && hora < 12) {
    img.src = 'imagens/manha.png'
    document.body.style.background = '#DAAC75'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#B9846F'
} else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#6E7AAB'
}
}