//text hover

var text = window.document.getElementById('identidade')

text.addEventListener('mouseenter', sda)
text.addEventListener('mouseout', sair)

function sda() {
    text.innerHTML = `IDENTIDADE <br>VISUAL`
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
msg.style.display = 'none'

img.addEventListener('mouseout', pas)
img.addEventListener('mouseenter', paz)

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
msg1.style.display = 'none'

img1.addEventListener('mouseout', ka)
img1.addEventListener('mouseenter', ka1)

function ka() {
    p2.style.display = 'block'
    msg1.style.display = 'none'
}

function ka1() {
    p2.style.display = 'none'
    msg1.style.display = 'block'
}

var img2 = document.getElementById('img2')
var p3 = document.getElementById('tx3')
var msg2 = document.getElementById('texto2')
msg2.style.display = 'none'

img2.addEventListener('mouseout', among)
img2.addEventListener('mouseenter', us)

function among() {
    p3.style.display = 'block'
    msg2.style.display = 'none'
}

function us() {
    p3.style.display = 'none'
    msg2.style.display = 'block'
}

//caixa pop up

//box

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if (e.target.id == modalID || e.target.classList == 'fechar') {
            modal.classList.remove('mostrar')
        }
    })
}

const box = document.querySelector('.box')
box.addEventListener('click', () => iniciaModal('modal-projeto'))

//caixa

function iniciaModal1(modalID1) {
    const modal1 = document.getElementById(modalID1)
    modal1.classList.add('mostrar')
    modal1.addEventListener('click', (ev) => {
        if (ev.target.id == modalID1 || ev.target.classList == 'fechar') {
            modal1.classList.remove('mostrar')
        }
    })
}

const caixa = document.querySelector('.caixa')
caixa.addEventListener('click', () => iniciaModal('modal-projeto'))

//caixa1

function iniciaModal2(modalID2) {
    const modal2 = document.getElementById(modalID2)
    modal2.classList.add('mostrar')
    modal2.addEventListener('click', (eve) => {
        if (eve.target.id == modalID2 || eve.target.classList == 'fechar') {
            modal2.classList.remove('mostrar')
        }
    })
}

const caixa1 = document.querySelector('.caixa1')
caixa1.addEventListener('click', () => iniciaModal('modal-projeto'))

//formulario 

var tag1 = document.getElementById('servico')
var tag2 = document.getElementById('servico1')
var tag3 = document.getElementById('servico2')
var tag4 = document.getElementById('servico3')
var tag5 = document.getElementById('servico4')
var tag6 = document.getElementById('servico5')

tag1.addEventListener('click', redc)
tag2.addEventListener('click', redc1)
tag3.addEventListener('click', redc2)
tag4.addEventListener('click', redc3)
tag5.addEventListener('click', redc4)
tag6.addEventListener('click', redc5)

function redc() {
    tag1.style.color = '#FF2600'
    tag1.style.borderColor = '#FF2600'
}

function redc1() {
    tag2.style.color = '#FF2600'
    tag2.style.borderColor = '#FF2600'
}

function redc2() {
    tag3.style.color = '#FF2600'
    tag3.style.borderColor = '#FF2600'
}

function redc3() {
    tag4.style.color = '#FF2600'
    tag4.style.borderColor = '#FF2600'
}

function redc4() {
    tag5.style.color = '#FF2600'
    tag5.style.borderColor = '#FF2600'
}

function redc5() {
    tag6.style.color = '#FF2600'
    tag6.style.borderColor = '#FF2600'
}

tag1.addEventListener('dblclick', nonec)
tag2.addEventListener('dblclick', nonec1)
tag3.addEventListener('dblclick', nonec2)
tag4.addEventListener('dblclick', nonec3)
tag5.addEventListener('dblclick', nonec4)
tag6.addEventListener('dblclick', nonec5)

function nonec() {
    tag1.style.color = '#000'
    tag1.style.borderColor = '#b7b7b7'
}

function nonec1() {
    tag2.style.color = '#000'
    tag2.style.borderColor = '#b7b7b7'
}

function nonec2() {
    tag3.style.color = '#000'
    tag3.style.borderColor = '#b7b7b7'
}

function nonec3() {
    tag4.style.color = '#000'
    tag4.style.borderColor = '#b7b7b7'
}

function nonec4() {
    tag5.style.color = '#000'
    tag5.style.borderColor = '#b7b7b7'
}

function nonec5() {
    tag6.style.color = '#000'
    tag6.style.borderColor = '#b7b7b7'
}


//hamburguer

var menu = document.getElementById('menu')

menu.onclick = function openmenus() {
        menu.classList.toggle("openmenu")
        boxmenu.style.display = 'block'
        nav.style.backgroundColor = '#181818'
        lines.style.background = 'gray'
        lines2.style.background = 'gray'
        lines1.style.background = 'gray'
        logo.src = 'assets/img/LOGO-BRANCA.svg'
}



