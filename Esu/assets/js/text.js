//text hover

var text = window.document.getElementById('identidade')

text.addEventListener('mouseenter', sda)
text.addEventListener('mouseout', sair)

function sda(){
    text.innerHTML = `IDENTIDADE <br>VISUAL`
}

function sair(){
    text.innerHTML = `Identidade Visual`
}

var text1 = window.document.getElementById('blocos1')

text1.addEventListener('mouseenter', entrar)
text1.addEventListener('mouseout', out)

function entrar(){
    text1.innerHTML = `SOCIAL<br> MEDIA`
}

function out(){
    text1.innerHTML = `Social Media`
}

var text2 = window.document.getElementById('blocos')

text2.addEventListener('mouseenter', enter)
text2.addEventListener('mouseout', vazo)

function enter(){
    text2.innerHTML = `CAMPANHAS`
}

function vazo(){
    text2.innerHTML = `Campanhas`
}

var text3 = window.document.getElementById('blocos2')

text3.addEventListener('mouseenter', sas)
text3.addEventListener('mouseout', escap)

function sas(){
    text3.innerHTML = `AUDIOVISUAL`
}

function escap(){
    text3.innerHTML = `Audiovisual`
}

//imagem hover texto e aparição do texto


var img = document.getElementById('img')
var p1 = document.getElementById('tx1')
var msg = document.getElementById('texto') 
msg.style.display = 'none'

img.addEventListener('mouseout', pas)
img.addEventListener('mouseenter', paz)

function pas(){
    p1.style.display = 'block'
    msg.style.display = 'none'
}

function paz(){
    p1.style.display = 'none'
    msg.style.display = 'block'
}

var img1 = document.getElementById('img1')
var p2 = document.getElementById('tx2')
var msg1 = document.getElementById('texto1') 
msg1.style.display = 'none'

img1.addEventListener('mouseout', ka)
img1.addEventListener('mouseenter', ka1)

function ka(){
    p2.style.display = 'block'
    msg1.style.display = 'none'
}

function ka1(){
    p2.style.display = 'none'
    msg1.style.display = 'block'
}

var img2 = document.getElementById('img2')
var p3 = document.getElementById('tx3')
var msg2 = document.getElementById('texto2') 
msg2.style.display = 'none'

img2.addEventListener('mouseout', among)
img2.addEventListener('mouseenter', us)

function among(){
    p3.style.display = 'block'
    msg2.style.display = 'none'
}

function us(){
    p3.style.display = 'none'
    msg2.style.display = 'block'
}

//caixa pop up

//box

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.classList == 'fechar') {
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
        if(ev.target.id == modalID1 || ev.target.classList == 'fechar') {
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
        if(eve.target.id == modalID2 || eve.target.classList == 'fechar') {
            modal2.classList.remove('mostrar')
        }
    })
}

const caixa1 = document.querySelector('.caixa1')
caixa1.addEventListener('click', () => iniciaModal('modal-projeto'))


