let au = document.querySelector('audio')
au.setAttribute('src','./ACDC - Back In Black (Official Music Video).mp3')
let header = document.querySelector('header')
let img = document.querySelector('img')
let h1 = document.querySelector('h1')
function clicou() {
    au.currentTime = 20
    au.play()
    document.body.style.backgroundColor = 'black'
    header.style.backgroundColor = 'black'
    img.setAttribute('src', './imagens/fotocaveira.jpeg')
    h1.innerText = 'Agora seu PC é MEUUUUUUUUUUU hahahahahahhaha'
    h1.style.color ='red'
}
function travou() {
    while (true) {
        console.log('hhddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdddddddddddgdgdgdgdgdgdgddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddgggggggggggggggggggggggahahahahahahahhahahahahhahahahahahahahhahahahahahahahahahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddddddddddddddddsssss')
    }
}