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

    if (tag1.style.color == 'red' || tag1.style.borderColor == 'red') {
        tag1.style.color = '#000'
        tag1.style.borderColor = '#b7b7b7'
    }else{ 
        tag1.style.color = 'red'
        tag1.style.borderColor = 'red'
    }
}

function redc1() {

    if (tag2.style.color == 'red' || tag2.style.borderColor == 'red') {
        tag2.style.color = '#000'
        tag2.style.borderColor = '#b7b7b7'
    }else{ 
        tag2.style.color = 'red'
        tag2.style.borderColor = 'red'
    }
}

function redc2() {

    if (tag3.style.color == 'red' || tag1.style.borderColor == 'red') {
        tag3.style.color = '#000'
        tag3.style.borderColor = '#b7b7b7'
    }else{ 
        tag3.style.color = 'red'
        tag3.style.borderColor = 'red'
    }
}

function redc3() {

    if (tag4.style.color == 'red' || tag1.style.borderColor == 'red') {
        tag4.style.color = '#000'
        tag4.style.borderColor = '#b7b7b7'
    }else{ 
        tag4.style.color = 'red'
        tag4.style.borderColor = 'red'
    }
}

function redc4() {

    if (tag5.style.color == 'red' || tag1.style.borderColor == 'red') {
        tag5.style.color = '#000'
        tag5.style.borderColor = '#b7b7b7'
    }else{ 
        tag5.style.color = 'red'
        tag5.style.borderColor = 'red'
    }
}

function redc5() {

    if (tag6.style.color == 'red' || tag1.style.borderColor == 'red') {
        tag6.style.color = '#000'
        tag6.style.borderColor = '#b7b7b7'
    }else{ 
        tag6.style.color = 'red'
        tag6.style.borderColor = 'red'
    }
}



//ver mais

var ver = document.getElementById('ver-mais')
var seta = document.getElementById('seta-down')
const imig = document.querySelectorAll("div#gridbile")

ver.addEventListener('click', verm)

function verm() {

    if (imig[0].style.display == 'block' || imig[1].style.display == 'block' || imig[2].style.display == 'block' || imig[3].style.display == 'block'
    || imig[4].style.display == 'block' || imig[5].style.display == 'block' || imig[6].style.display == 'block' || imig[7].style.display == 'block'
    || imig[8].style.display == 'block' || imig[9].style.display == 'block') {
        imig[0].style.display = 'none'
        imig[1].style.display = 'none'
        imig[2].style.display = 'none'
        imig[3].style.display = 'none'
        imig[4].style.display = 'none'
        imig[5].style.display = 'none'
        imig[6].style.display = 'none'
        imig[7].style.display = 'none'
        imig[8].style.display = 'none'
        imig[9].style.display = 'none'
    } else{
        imig[0].style.display = 'block'
        imig[1].style.display = 'block'
        imig[2].style.display = 'block'
        imig[3].style.display = 'block'
        imig[4].style.display = 'block'
        imig[5].style.display = 'block'
        imig[6].style.display = 'block'
        imig[7].style.display = 'block'
        imig[8].style.display = 'block'
        imig[9].style.display = 'block'
    }
}


//hamburguer

var menu = document.getElementById('menu')
var boxmenu = document.getElementById('boxmenu')
var nav = document.getElementById('nave')
var logo = document.getElementById('exulog')
var line1 = document.getElementById('linas1')
var line2 = document.getElementById('linas2')
var line3 = document.getElementById('linas3')
var burga = document.getElementById('burguin')
var projeto = document.getElementById('menu1')
var sobre = document.getElementById('menu2')
var contato = document.getElementById('menu3')
var orçamento = document.getElementById('botaoo')


menu.onclick = function openmenus() {
    menu.classList.toggle("openmenu")

    if (boxmenu.style.display == 'block' || logo.src == 'assets/img/LOGO-BRANCA.svg' || nav.style.backgroundColor == 'black') {
        boxmenu.style.display = 'none'
        logo.src = 'assets/img/Nova_Logo_studio.svg'
        nav.style.backgroundColor = 'white'
    } else {
        boxmenu.style.display = 'block'
        logo.src = 'assets/img/LOGO-BRANCA.svg'
        nav.style.backgroundColor = 'black'
    }

    if (line1.style.backgroundColor == 'gray' || line2.style.backgroundColor == 'gray' || line3.style.backgroundColor == 'gray') {
        line1.style.backgroundColor = 'black'
        line2.style.backgroundColor = 'black'
        line3.style.backgroundColor = 'black'
    } else {
        line1.style.backgroundColor = 'gray'
        line2.style.backgroundColor = 'gray'
        line3.style.backgroundColor = 'gray'
    }

    if (burga.style.background == 'black' || burga.style.opacity == '0.9' || burga.style.width == '100vw' || burga.style.height == '100vh'){
        burga.style.background = 'transparent'
        burga.style.opacity = '1'
        burga.style.width = '0vw'
        burga.style.height = '0vh'
    } else{
        burga.style.background = 'black'
        burga.style.opacity = '0.9'
        burga.style.width = '100vw'
        burga.style.height = '100vh'
    }
}



