let au = document.querySelector('audio')
au.setAttribute('src','./musica_module 3.mp3')
let header = document.querySelector('header')
let img = document.querySelector('img')
function clicou() {
    au.play()
    window.alert('AGORA SEU PC É MEU!!!!!!!!!!!')
    document.body.style.backgroundColor = 'black'
    header.style.backgroundColor = 'black'
    img.setAttribute('src', './imagens/fotocaveira.jpeg')
    while (true) {
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdddddddddddgdgdgdgdgdgdgddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddgggggggggggggggggggggggahahahahahahahhahahahahhahahahahahahahhahahahahahahahahahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    }
}