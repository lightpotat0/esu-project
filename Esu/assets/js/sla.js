//text hover

if (innerWidth > 800){

var text = window.document.getElementById('identidade')

text.addEventListener('mouseenter', sda)
text.addEventListener('mouseout', sair)

function sda() {
    text.innerHTML = `IDENTIDADE <br>   VISUAL`
}

function sair() {
    text.innerHTML = `Identidade Visual`
}

var text1 = window.document.getElementById('blocos1')

text1.addEventListener('mouseenter', entrar)
text1.addEventListener('mouseout', out)

function entrar() {
    text1.innerHTML = `SOCIAL<br> MEDIA`
}

function out() {
    text1.innerHTML = `Social Media`
}

var text2 = window.document.getElementById('blocos')

text2.addEventListener('mouseenter', enter)
text2.addEventListener('mouseout', vazo)

function enter() {
    text2.innerHTML = `CAMPANHAS`
}

function vazo() {
    text2.innerHTML = `Campanhas`
}

var text3 = window.document.getElementById('blocos2')

text3.addEventListener('mouseenter', sas)
text3.addEventListener('mouseout', escap)

function sas() {
    text3.innerHTML = `AUDIOVISUAL`
}

function escap() {
    text3.innerHTML = `Audiovisual`
}

//imagem hover texto e aparição do texto

    var img = document.getElementById('img')
    var p1 = document.getElementById('tx1')
    var msg = document.getElementById('texto')

    img.addEventListener('mouseout', pas)
    img.addEventListener('mouseenter', paz)
    msg.style.display = 'none'

    function pas() {
        p1.style.display = 'block'
        msg.style.display = 'none'
    }

    function paz() {
        p1.style.display = 'none'
        msg.style.display = 'block'
    }

    var img1 = document.getElementById('img1')
    var p2 = document.getElementById('tx2')
    var msg1 = document.getElementById('texto1')

    img1.addEventListener('mouseout', ka)
    img1.addEventListener('mouseenter', ka1)
    msg1.style.display = 'none'

    function ka() {
        p2.style.display = 'block'
        msg1.style.display = 'none'
    }

    function ka1() {
        p2.style.display = 'none'
        msg1.style.display = 'block'
    }

    var img2 = document.getElementById('img3')
    var p3 = document.getElementById('tx4')
    var msg2 = document.getElementById('texto3')

    img2.addEventListener('mouseout', among)
    img2.addEventListener('mouseenter', us)
    msg2.style.display = 'none'

    function among() {
        p3.style.display = 'block'
        msg2.style.display = 'none'
    }

    function us() {
        p3.style.display = 'none'
        msg2.style.display = 'block'
    }
}
